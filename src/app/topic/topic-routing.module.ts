import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
import {TopicComponent} from "./topic.component";


const routes: Routes=[
  {
    path:'',
    component:TopicComponent
  }
]

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule],
  providers:[]
})
export class TopicRoutingModule { }



