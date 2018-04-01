import { NgModule } from '@angular/core';
import {SearchComponent} from "./search.component";
import {SearchRoutingModule} from "./search-routing.module";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {TopicListComponent} from "../topic/topic-list/topic-list.component";
import {TopicListModule} from "../topic/topic-list/topic-list.module";
import {ArticleitemModule} from "../find/articleitem/articleitem.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TopicListModule,
    SearchRoutingModule,
    ArticleitemModule
  ],
  exports: [
  ],
  declarations: [
    SearchComponent
  ],
  providers: [],
})
export class SearchModule { }

