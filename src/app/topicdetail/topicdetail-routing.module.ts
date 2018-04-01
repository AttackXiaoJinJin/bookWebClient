import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
import {TopicdetailComponent} from "./topicdetail.component";


const routes: Routes=[
  {
    path:'',
    component:TopicdetailComponent
  }
]

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule],
  providers:[]
})
export class TopicdetailRoutingModule { }



