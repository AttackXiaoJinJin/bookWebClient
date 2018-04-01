import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {TopicListComponent} from "./topic-list.component";
import {PipesModule} from "../../pipes/pipes.module";

    @NgModule({
  imports: [
    CommonModule,
    PipesModule
  ],
  exports: [
    // TopicListModule
    TopicListComponent
  ],
  declarations: [
    TopicListComponent
  ],
  providers: [],
})
export class TopicListModule { }



