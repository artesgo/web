import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirestoreComponent } from './firestore.component';
import { TradeComponent } from './trade/trade.component';
import { PortforiaComponent } from './portforia/portforia.component';

const routes: Routes = [
  { 
    path: '', component: FirestoreComponent, children: [
      { path: '', component: TradeComponent },
      { path: 'portforia', component: PortforiaComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirestoreRoutingModule { }
