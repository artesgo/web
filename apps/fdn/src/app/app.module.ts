import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FoundationModule } from "artesgo-foundation";

import { AppComponent } from "./app.component";
import { GithubComponent } from './github/github.component';
import { AppRoutingModule } from './app.routes';
import { JavascriptComponent } from './javascript/javascript.component';
import { TypescriptComponent } from './typescript/typescript.component';
import { HtmlComponent } from './html/html.component';
import { CssComponent } from './css/css.component';
import { AngularComponent } from './angular/angular.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ChessComponent } from './chess/chess.component';
import { FirestoreComponent } from './firestore/firestore.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { D3Component } from './d3/d3.component';
import { VariableComponent } from './javascript/variable/variable.component';
import { ControlComponent } from './javascript/control/control.component';
import { FunctionsComponent } from './javascript/functions/functions.component';
import { LoopComponent } from './javascript/loop/loop.component';
import { NavComponent } from './javascript/nav/nav.component';
import { DatatypeComponent } from './javascript/datatype/datatype.component';
import { DraggableDirective } from './d3/directives/draggable.directive';
import { NodeCircleComponent } from './d3/visuals/shared/node-circle.component';
import { LinkVisualComponent } from './d3/visuals/shared/link-visual.component';
import { GraphComponent } from './d3/visuals/graph/graph.component';
import { ZoomableDirective } from './d3/directives/zoomable.directive';
import { NodeRectComponent } from './d3/visuals/shared/node-bar.component';
import { BarGraphComponent } from './d3/visuals/bar-graph/bar-graph.component';
import { D3BarComponent } from './d3/d3-bar/d3-bar.component';
import { D3NavComponent } from './d3/nav/nav.component';
import { D3BubbleComponent } from './d3/d3-bubble/d3-bubble.component';

@NgModule({
  declarations: [
    AppComponent, GithubComponent, JavascriptComponent, TypescriptComponent, HtmlComponent, CssComponent, AngularComponent, NotFoundComponent, ChessComponent, FirestoreComponent, D3Component, VariableComponent, ControlComponent, FunctionsComponent, LoopComponent, NavComponent, DatatypeComponent,
    ZoomableDirective,
    DraggableDirective,
    NodeCircleComponent,
    NodeRectComponent,
    LinkVisualComponent,
    GraphComponent,
    BarGraphComponent,
    D3BarComponent,
    NavComponent,
    D3NavComponent,
    D3BubbleComponent
  ],
  imports: [
    BrowserModule,
    FoundationModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
