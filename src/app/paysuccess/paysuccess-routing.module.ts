import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
import {PaysuccessComponent} from "./paysuccess.component";


const routes: Routes=[
  {
    path:'',
    component:PaysuccessComponent
  }
]

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule],
  providers:[]
})
export class PaysuccessRoutingModule { }



