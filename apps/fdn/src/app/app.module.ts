import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GithubComponent } from './github/github.component';
import { AppRoutingModule } from './app.routes';
import { TypescriptComponent } from './typescript/typescript.component';
import { AngularComponent } from './angular/angular.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ChessComponent } from './chess/chess.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from "@angular/fire/auth";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { SigninComponent } from './signin/signin.component';
import { FoundationModule } from '@fdn/foundation';
// import { FoundationModule } from 'artesgo-foundation';

@NgModule({
  declarations: [
    AppComponent,
    GithubComponent,
    TypescriptComponent,
    AngularComponent,
    NotFoundComponent,
    ChessComponent,
    SigninComponent,
  ],
  imports: [
    BrowserModule,
    FoundationModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    BrowserAnimationsModule, // imports firebase/firestore, only needed for database features
    MaterialModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    SigninComponent
  ]
})
export class AppModule {}
