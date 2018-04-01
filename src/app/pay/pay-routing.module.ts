import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
import {PayComponent} from "./pay.component";


const routes: Routes=[
  {
    path:'',
    component:PayComponent
  }
]

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule],
  providers:[]
})
export class PayRoutingModule { }



