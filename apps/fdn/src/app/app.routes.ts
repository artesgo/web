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

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '', redirectTo: '/landing', pathMatch: 'full' },
            { path: 'github', component: GithubComponent },
            { path: 'javascript', component: JavascriptComponent },
            { path: 'typescript', component: TypescriptComponent },
            { path: 'css', component: CssComponent },
            { path: 'html', component: HtmlComponent },
            { path: 'angular', component: AngularComponent },
            { path: 'chess', component: ChessComponent },
            { path: 'firestore', component: FirestoreComponent },
            { path: '**', component: NotFoundComponent }
        ]
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}