import { NgModule } from '@angular/core';

import {CommonModule} from "@angular/common";
import {BookcommentComponent} from "./bookcomment/bookcomment.component";
import {SentenceComponent} from "./sentence/sentence.component";
import {ShortcommentComponent} from "./shortcomment/shortcomment.component";
import {BookdetailComponent} from "./bookdetail.component";
import {FormsModule} from "@angular/forms";
import {BkrecomComponent} from "./bookcomment/bkrecom/bkrecom.component";
import {StringSlicePipe} from "../pipes/string-slice.pipe";
import {PipesModule} from "../pipes/pipes.module";
import {FindRoutingModule} from "../find/find-routing.module";



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PipesModule,
    FindRoutingModule,
  ],
  exports: [

  ],
  declarations: [
    BookdetailComponent,
    BookcommentComponent,
    SentenceComponent,
    ShortcommentComponent,
    BkrecomComponent
  ],
  providers: [],
})
export class BookdetailModule { }

