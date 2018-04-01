import { NgModule } from '@angular/core';
import {ArticleitemComponent} from "./articleitem.component";
import {PipesModule} from "../../pipes/pipes.module";


@NgModule({
  imports: [
    PipesModule
  ],
  exports: [
    ArticleitemComponent
  ],
  declarations: [
  ArticleitemComponent
  ],
  providers: [],
})
export class ArticleitemModule { }
