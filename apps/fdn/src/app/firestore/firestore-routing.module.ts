import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirestoreComponent } from './firestore.component';
import { TradeComponent } from './trade/trade.component';
import { PortforiaComponent } from './portforia/portforia.component';

const routes: Routes = [
  { 
    path: '', component: FirestoreComponent, children: [
      { path: '', component: TradeComponent, data: { title: 'Trade Tracker'} },
      { path: 'portforia', component: PortforiaComponent, data: { title: 'Page Builder'} },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirestoreRoutingModule { }
