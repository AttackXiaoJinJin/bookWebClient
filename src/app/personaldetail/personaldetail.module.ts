import { NgModule } from '@angular/core';
import {PersonaldatailtopComponent} from "./personaldatailtop/personaldatailtop.component";
import {PersonaldetailComponent} from "./personaldetail.component";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {ArticleModule} from "../index/article/article.module";
import {ArticleitemModule} from "../find/articleitem/articleitem.module";



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ArticleitemModule
  ],
  exports: [

  ],
  declarations: [
    PersonaldatailtopComponent,
    PersonaldetailComponent
  ],
  providers: [],
})
export class PersonaldetailModule { }
