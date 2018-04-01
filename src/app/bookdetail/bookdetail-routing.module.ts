import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
import {BookdetailComponent} from "./bookdetail.component";


const routes: Routes=[
  {
    path:'',
    component:BookdetailComponent
  }
]

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule],
  providers:[]
})
export class BookdetailRoutingModule { }



