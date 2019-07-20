import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { GithubComponent } from './github/github.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { TypescriptComponent } from './typescript/typescript.component';
import { HtmlComponent } from './html/html.component';
import { CssComponent } from './css/css.component';
import { AngularComponent } from './angular/angular.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ChessComponent } from './chess/chess.component';
import { FirestoreComponent } from './firestore/firestore.component';
import { D3Component } from './d3/d3.component';
import { VariableComponent } from './javascript/variable/variable.component';
import { ControlComponent } from './javascript/control/control.component';
import { FunctionsComponent } from './javascript/functions/functions.component';
import { LoopComponent } from './javascript/loop/loop.component';
import { DatatypeComponent } from './javascript/datatype/datatype.component';
import { D3BarComponent } from './d3/d3-bar/d3-bar.component';
import { D3BubbleComponent } from './d3/d3-bubble/d3-bubble.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '', redirectTo: '/landing', pathMatch: 'full' },
            { path: 'github', component: GithubComponent },
            { path: 'javascript', children: [
                { path: '', component: JavascriptComponent },
                { path: 'variable', component: VariableComponent },
                { path: 'control', component: ControlComponent },
                { path: 'functions', component: FunctionsComponent },
                { path: 'loop', component: LoopComponent },
                { path: 'data', component: DatatypeComponent },
            ]},
            { path: 'typescript', component: TypescriptComponent },
            { path: 'css', component: CssComponent },
            { path: 'html', component: HtmlComponent },
            { path: 'angular', component: AngularComponent },
            { path: 'chess', component: ChessComponent },
            { path: 'firestore', component: FirestoreComponent },
            { path: 'd3', children: [
                { path: '', component: D3Component },
                { path: 'bubble', component: D3BubbleComponent },
                { path: 'bar', component: D3BarComponent },
                { path: 'pie', component: ControlComponent },
            ]},
            { path: '**', component: NotFoundComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}