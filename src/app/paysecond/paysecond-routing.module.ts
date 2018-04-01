import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
import {PaysecondComponent} from "./paysecond.component";


const routes: Routes=[
  {
    path:'',
    component:PaysecondComponent
  }
]

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule],
  providers:[]
})
export class PaysecondRoutingModule { }



