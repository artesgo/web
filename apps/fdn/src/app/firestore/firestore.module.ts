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
import { TradePipe } from './trade.pipe';
import { StoreModule } from '@ngrx/store';
import { tradeFeature, tradeReducer } from './trade/+state/trade.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TradeEffects } from './trade/+state/trade.effects';

@NgModule({
  declarations: [
    FirestoreComponent,
    PortforiaComponent,
    TradeComponent,
    TradeAggregateComponent,
    TradeAdderComponent,
    TradeDeleteComponent,
    TradePipe,
  ],
  imports: [
    CommonModule,
    FirestoreRoutingModule,
    FormsModule,
    SharedModule,
    MaterialModule,
    FoundationModule,
    ReactiveFormsModule,
    StoreModule.forFeature(tradeFeature, tradeReducer),
    EffectsModule.forFeature([TradeEffects]),
  ],
  entryComponents: [
    TradeAdderComponent,
    TradeDeleteComponent,
    TradeAggregateComponent,
  ],
})
export class FirestoreModule { }
