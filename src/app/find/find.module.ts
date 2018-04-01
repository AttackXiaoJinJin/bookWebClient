import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {FindComponent} from "./find.component";
import {FindRoutingModule} from "./find-routing.module";
import {ArticleitemComponent} from "./articleitem/articleitem.component";
import {BookitemComponent} from "./bookitem/bookitem.component";
import {EverybookComponent} from "./everybook/everybook.component";
import {PipesModule} from "../pipes/pipes.module";
import {ArticleitemModule} from "./articleitem/articleitem.module";
import {BookitemModule} from "./bookitem/bookitem.module";

@NgModule({
  imports: [
    FindRoutingModule,
    CommonModule,
    PipesModule,
    ArticleitemModule,
    BookitemModule
  ],
  exports: [
    FindComponent
  ],
  declarations: [
    FindComponent,
    EverybookComponent,

  ],
  providers: [],
})
export class FindModule { }

