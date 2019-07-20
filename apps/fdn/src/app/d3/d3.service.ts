import { Injectable } from '@angular/core';
import * as d3 from 'd3';
import { Link, Node, ForceDirectedGraph } from './models';
import { of, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class D3Service {
    /** This service will provide methods to enable user interaction with elements
    * while maintaining the d3 simulations physics
    */
    constructor() {}

    /** A method to bind a pan and zoom behaviour to an svg element */
    applyZoomableBehaviour(svgElement, containerElement) {
        let svg, container, zoomed, zoom;

        svg = d3.select(svgElement);
        container = d3.select(containerElement);

        zoomed = () => {
            const transform = d3.event.transform;
            container.attr("transform", `translate(${transform.x}, ${transform.y}) scale(${transform.k})`);
        }

        zoom = d3.zoom().on("zoom", zoomed);
        svg.call(zoom);
    }

    /** A method to bind a draggable behaviour to an svg element */
    applyDraggableBehaviour(element, node: Node, graph: ForceDirectedGraph) {
        const d3element = d3.select(element);

        d3element.call(d3.drag().on("start", () => {

            /** Preventing propagation of dragstart to parent elements */
            d3.event.sourceEvent.stopPropagation();
            console.log(d3.event, graph);
            
            if (!d3.event.active && graph) {
                graph.simulation.alphaTarget(0.3).restart();
            }

            d3.event
                .on("drag", () => {
                    node.fx = d3.event.x;
                    node.fy = d3.event.y;
                })
                .on("end", () => {
                    if (!d3.event.active && graph) {
                        graph.simulation.alphaTarget(0);
                    }
                    node.fx = null;
                    node.fy = null;
                });
        }));
    }

    /** The interactable graph we will simulate in this article
    * This method does not interact with the document, purely physical calculations with d3
    */
    getForceDirectedGraph(nodes: Node[], links: Link[], options: { width, height} ): Observable<ForceDirectedGraph> {
        return of(new ForceDirectedGraph(nodes, links, options));
    }
}