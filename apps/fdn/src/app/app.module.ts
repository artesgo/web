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

@NgModule({
  declarations: [AppComponent, GithubComponent, JavascriptComponent, TypescriptComponent, HtmlComponent, CssComponent, AngularComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    FoundationModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
