import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { GithubComponent } from './github/github.component';
import { TypescriptComponent } from './typescript/typescript.component';
import { HtmlComponent } from './html/html.component';
import { CssComponent } from './css/css.component';
import { AngularComponent } from './angular/angular.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ChessComponent } from './chess/chess.component';
import { FirestoreComponent } from './firestore/firestore.component';
import { PortforiaComponent } from './firestore/portforia/portforia.component';
import { TradeComponent } from './firestore/trade/trade.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '', redirectTo: '/landing', pathMatch: 'full' },
            { path: 'js', loadChildren: './js/js.module#JsModule'},
            { path: 'd3', loadChildren: './d3/d3.module#D3Module'},
            { path: 'github', component: GithubComponent },
            { path: 'typescript', component: TypescriptComponent },
            { path: 'css', component: CssComponent },
            { path: 'html', component: HtmlComponent },
            { path: 'angular', component: AngularComponent },
            { path: 'chess', component: ChessComponent },
            { path: 'firestore', component: FirestoreComponent, children: [
                { path: '', component: TradeComponent },
                { path: 'portforia', component: PortforiaComponent },
                { path: 'trades', component: TradeComponent },
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