import { NgModule } from '@angular/core';
import {StringSlicePipe} from "./string-slice.pipe";
import {FindbookPipe} from "./findbook.pipe";
import {FindArticlePipe} from "./find-article.pipe";

@NgModule({
  imports: [

  ],
  exports: [
    StringSlicePipe,
    FindbookPipe,
    FindArticlePipe
  ],
  declarations: [
    StringSlicePipe,
    FindbookPipe,
    FindArticlePipe
  ],
  providers: [],
})
export class PipesModule { }

