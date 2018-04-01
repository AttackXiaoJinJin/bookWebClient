import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
import {BooklistComponent} from "./booklist.component";


const routes: Routes=[
  {
    path:'',
    component:BooklistComponent
  }
]

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule],
  providers:[]
})
export class BooklistRoutingModule { }





