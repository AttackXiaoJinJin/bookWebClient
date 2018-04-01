import { NgModule } from '@angular/core';

import {BooklistRoutingModule} from "./booklist-routing.module";
import {BooklistComponent} from "./booklist.component";
import {BooklistBookitemComponent} from "./booklist-bookitem/booklist-bookitem.component";
import {RouterModule} from "@angular/router";
import {PageComponent} from "../page/page.component";
import {CommonModule} from "@angular/common";
import {FindbookPipe} from "../pipes/findbook.pipe";
import {PageModule} from "../page/page.module";
import {PipesModule} from "../pipes/pipes.module";

@NgModule({
  imports: [
    BooklistRoutingModule,
    CommonModule,
    PageModule,
    PipesModule
  ],
  exports: [
  ],
  declarations: [BooklistComponent,
                BooklistBookitemComponent,
                  ],
  providers: [],
})
export class BooklistModule { }
