import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirestoreRoutingModule } from './firestore-routing.module';
import { TradeAggregateComponent } from './trade-aggregate/trade-aggregate.component';
import { FirestoreComponent } from './firestore.component';
import { PortforiaComponent } from './portforia/portforia.component';
import { TradeComponent } from './trade/trade.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { FoundationModule } from 'artesgo-foundation';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FirestoreComponent,
    PortforiaComponent,
    TradeComponent,
    TradeAggregateComponent,
  ],
  imports: [
    CommonModule,
    FirestoreRoutingModule,
    SharedModule,
    MaterialModule,
    FoundationModule,
    ReactiveFormsModule,
  ],
  entryComponents: [TradeAggregateComponent],
})
export class FirestoreModule { }
