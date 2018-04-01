import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {SearchTopicComponent} from "./search-topic/search-topic.component";
import {TopicListComponent} from "./topic-list/topic-list.component";
import {TopicComponent} from "./topic.component";
import {TopicRoutingModule} from "./topic-routing.module";
import {TopicListModule} from "./topic-list/topic-list.module";
import {FormsModule} from "@angular/forms";
import {PageModule} from "../page/page.module";
    @NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TopicRoutingModule,
    TopicListModule,
    PageModule
  ],
  exports: [

  ],
  declarations: [
    SearchTopicComponent,
    TopicComponent
  ],
  providers: [],
})
export class TopicModule { }



