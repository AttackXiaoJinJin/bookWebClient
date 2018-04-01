import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {PipesModule} from "../../pipes/pipes.module";
import {ArticleComponent} from "./article.component";


@NgModule({
  imports: [
    CommonModule,
    PipesModule
  ],
  exports: [
    ArticleComponent
  ],
  declarations: [
    ArticleComponent
  ],
  providers: [],
})
export class ArticleModule { }

