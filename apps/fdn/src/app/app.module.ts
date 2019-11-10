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
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { appReducer } from './+state/app.reducer';
import { AppEffects } from './+state/app.effects';
import { HttpClientModule } from '@angular/common/http';
import { translocoLoader } from './transloco.loader';
import { TranslocoModule, TRANSLOCO_CONFIG, TranslocoConfig } from '@ngneat/transloco';

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
    AngularFireModule.initializeApp(environment.firestore),
    AngularFirestoreModule,
    AngularFireAuthModule,
    StoreModule.forRoot({ count: appReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    EffectsModule.forRoot([AppEffects]),
    BrowserAnimationsModule, // imports firebase/firestore, only needed for database features
    MaterialModule,
    SharedModule,
    HttpClientModule,
    TranslocoModule,
  ],
  providers: [{
      provide: TRANSLOCO_CONFIG,
      useValue: {
        availableLangs: ['en', 'fr'],
        defaultLang: 'en',
        prodMode: environment.production,
      } as TranslocoConfig
    },
    translocoLoader
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    SigninComponent
  ]
})
export class AppModule {}
