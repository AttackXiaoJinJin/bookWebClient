import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {TopicTopComponent} from "./topic-top/topic-top.component";
import {TopicdetailComponent} from "./topicdetail.component";
import {TopicdetailRoutingModule} from "./topicdetail-routing.module";
import {FormsModule} from "@angular/forms";
import {ArticleModule} from "../index/article/article.module";
import {ArticleitemModule} from "../find/articleitem/articleitem.module";
    @NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TopicdetailRoutingModule,
    ArticleitemModule
  ],
  exports: [

  ],
  declarations: [
    TopicTopComponent,
    TopicdetailComponent
  ],
  providers: [],
})
export class TopicdetailModule { }



