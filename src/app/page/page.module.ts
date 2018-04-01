import { NgModule } from '@angular/core';
import {PageComponent} from "./page.component";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    PageComponent,

  ],
  declarations: [
                PageComponent
                  ],
  providers: [],
})
export class PageModule { }
