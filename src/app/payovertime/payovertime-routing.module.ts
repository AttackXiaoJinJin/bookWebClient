import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
import {PayovertimeComponent} from "./payovertime.component";


const routes: Routes=[
  {
    path:'',
    component:PayovertimeComponent
  }
]

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule],
  providers:[]
})
export class PayovertimeRoutingModule { }



