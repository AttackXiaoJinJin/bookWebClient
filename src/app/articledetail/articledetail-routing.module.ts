import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
import {ArticledetailComponent} from "./articledetail.component";


const routes: Routes=[
  {
    path:'',
    component:ArticledetailComponent
  }
]

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule],
  providers:[]
})
export class ArticledetailRoutingModule { }



