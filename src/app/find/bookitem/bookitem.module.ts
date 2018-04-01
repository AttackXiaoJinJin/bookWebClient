import { NgModule } from '@angular/core';
import {PipesModule} from "../../pipes/pipes.module";
import {BookitemComponent} from "./bookitem.component";


@NgModule({
  imports: [
    PipesModule
  ],
  exports: [
    BookitemComponent
  ],
  declarations: [
    BookitemComponent
  ],
  providers: [],
})
export class BookitemModule { }
