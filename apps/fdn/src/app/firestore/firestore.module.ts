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
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TradeAdderComponent } from './trade-adder/trade-adder.component';
import { TradeDeleteComponent } from './trade-delete/trade-delete.component';

@NgModule({
  declarations: [
    FirestoreComponent,
    PortforiaComponent,
    TradeComponent,
    TradeAggregateComponent,
    TradeAdderComponent,
    TradeDeleteComponent,
  ],
  imports: [
    CommonModule,
    FirestoreRoutingModule,
    FormsModule,
    SharedModule,
    MaterialModule,
    FoundationModule,
    ReactiveFormsModule,
  ],
  entryComponents: [
    TradeAdderComponent,
    TradeDeleteComponent,
    TradeAggregateComponent,
  ],
})
export class FirestoreModule { }
