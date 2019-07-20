import * as d3 from 'd3';

export class Node implements d3.SimulationNodeDatum {
    // Optional - defining optional implementation properties - required for relevant typing assistance
    index?: number;
    x?: number;
    y?: number;
    vx?: number;
    vy?: number;
    fx?: number | null;
    fy?: number | null;
    r?: number;
    statOffset?: number;
    labelOffset?: number;
    textY?: number;
    width?: number;
    height?: number;
    content?: string;
    color?: string;
    
    id: string;
    
    constructor(id) {
        this.id = id;
    }
}