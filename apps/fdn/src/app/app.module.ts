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

@NgModule({
  declarations: [AppComponent, GithubComponent, JavascriptComponent, TypescriptComponent, HtmlComponent, CssComponent, AngularComponent, NotFoundComponent, ChessComponent, FirestoreComponent],
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
