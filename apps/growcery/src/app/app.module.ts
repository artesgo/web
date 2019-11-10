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
import { FilterComponent } from './growcery/filter/filter.component';
import { SearchComponent } from './growcery/search/search.component';
import { AddComponent } from './growcery/add/add.component';

@NgModule({
  declarations: [AppComponent, CheckoutComponent, GrowceryComponent, FilterComponent, SearchComponent, AddComponent],
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
  entryComponents: [
    FilterComponent,
    SearchComponent,
    AddComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
