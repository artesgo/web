import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GithubComponent } from './github/github.component';
import { TypescriptComponent } from './typescript/typescript.component';
import { AngularComponent } from './angular/angular.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ChessComponent } from './chess/chess.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: '/firestore', pathMatch: 'full' },
      { path: 'js', loadChildren: './js/js.module#JsModule' },
      { path: 'd3', loadChildren: './d3/d3.module#D3Module' },
      { path: 'web', loadChildren: './web/web.module#WebModule' },
      {
        path: 'firestore',
        loadChildren: './firestore/firestore.module#FirestoreModule'
      },
      { path: 'github', component: GithubComponent, data: { title: 'Github' } },
      {
        path: 'typescript',
        component: TypescriptComponent,
        data: { title: 'Typescript' }
      },
      {
        path: 'angular',
        component: AngularComponent,
        data: { title: 'Angular' }
      },
      { path: 'chess', component: ChessComponent, data: { title: 'Chess' } },
      { path: '**', component: NotFoundComponent, data: { title: 'Whoopsie!' } }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
