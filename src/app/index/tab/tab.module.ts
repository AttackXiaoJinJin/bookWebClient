import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {FindModule} from "../../find/find.module";
import {TabComponent} from "./tab.component";
import {ArticleComponent} from "../article/article.component";
import {ArticleModule} from "../article/article.module";

@NgModule({
  imports: [
    CommonModule,
    FindModule,
    ArticleModule
  ],
  exports: [
    TabComponent
  ],

  declarations: [
    TabComponent

  ],
  providers: []
})
export class TabModule { }

