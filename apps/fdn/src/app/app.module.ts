import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FoundationModule } from 'artesgo-foundation';

import { AppComponent } from './app.component';
import { GithubComponent } from './github/github.component';
import { AppRoutingModule } from './app.routes';
import { TypescriptComponent } from './typescript/typescript.component';
import { AngularComponent } from './angular/angular.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ChessComponent } from './chess/chess.component';
import { FirestoreComponent } from './firestore/firestore.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { TradeComponent } from './firestore/trade/trade.component';
import { PortforiaComponent } from './firestore/portforia/portforia.component';
import { FSNavComponent } from './firestore/nav/nav.component';
import { TradeAggregateComponent } from './firestore/trade-aggregate/trade-aggregate.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    GithubComponent,
    TypescriptComponent,
    AngularComponent,
    NotFoundComponent,
    ChessComponent,
    FirestoreComponent,
    FSNavComponent,
    TradeComponent,
    PortforiaComponent,
    TradeAggregateComponent,
  ],
  imports: [
    BrowserModule,
    FoundationModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    BrowserAnimationsModule, // imports firebase/firestore, only needed for database features
    MaterialModule,
    SharedModule,
  ],
  providers: [],
  entryComponents: [TradeAggregateComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
