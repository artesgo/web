import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FoundationModule } from '@fdn/foundation';
import { AppRoutingModule } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { CheckoutComponent } from './checkout/checkout.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { environment } from '../environments/environment';
import { GrowceryComponent } from './growcery/growcery.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent, CheckoutComponent, GrowceryComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FoundationModule,
    MaterialModule,
    AppRoutingModule,
    RouterModule,
    AngularFireModule.initializeApp(environment.firestore),
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
