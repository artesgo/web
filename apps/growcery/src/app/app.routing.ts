import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GrowceryComponent } from './growcery/growcery.component';
import { AppComponent } from './app.component';

const routes: Routes = [
    {
      path: '', component: GrowceryComponent
    }
  ];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}