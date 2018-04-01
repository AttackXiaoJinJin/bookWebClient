import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {IndexComponent} from "./index.component";
import {ArticleComponent} from "./article/article.component";
import {BannerComponent} from "./banner/banner.component";

import {PaginationComponent} from "./pagination/pagination.component";
import {TabComponent} from "./tab/tab.component";
import {PipesModule} from "../pipes/pipes.module";
import {FindModule} from "../find/find.module";
import {TabModule} from "./tab/tab.module";


    @NgModule({
  imports: [
    CommonModule,
    PipesModule,
    TabModule

  ],
  exports: [

  ],

  declarations: [
    PaginationComponent,
    IndexComponent,
    BannerComponent
  ],
  providers: [],
})
export class IndexModule { }

