import { NgModule } from '@angular/core';

import {CommonModule} from "@angular/common";
import {ArticledetailComponent} from "./articledetail.component";
import {ArticleCommentComponent} from "./article-comment/article-comment.component";
import {FormsModule} from "@angular/forms";
import {ArtrecomComponent} from "./article-comment/artrecom/artrecom.component";
import {ArticledetailRoutingModule} from "./articledetail-routing.module";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ArticledetailRoutingModule
  ],
  exports: [

  ],
  declarations: [
    ArticledetailComponent,
    ArticleCommentComponent,
    ArtrecomComponent

  ],
  providers: [],
})
export class ArticledetailModule { }

