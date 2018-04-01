import { NgModule } from '@angular/core';
import {AllcomComponent} from "./allcom/allcom.component";
import {ArtcomitemComponent} from "./artcomitem/artcomitem.component";
import {BkcomitemComponent} from "./bkcomitem/bkcomitem.component";
import {OrderitemComponent} from "./orderitem/orderitem.component";
import {PersonalCenterComponent} from "./personal-center.component";
import {TopicListModule} from "../topic/topic-list/topic-list.module";
import {ArticleitemModule} from "../find/articleitem/articleitem.module";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {PersonalInformationComponent} from "../personal-information/personal-information.component";
import {BookitemModule} from "../find/bookitem/bookitem.module";
import {PersonalInformationModule} from "../personal-information/personal-information.module";


@NgModule({
  imports: [
    TopicListModule,
    ArticleitemModule,
    FormsModule,
    CommonModule,
    BookitemModule,
    PersonalInformationModule
  ],
  exports: [

  ],
  declarations: [
    AllcomComponent,
    ArtcomitemComponent,
    BkcomitemComponent,
    OrderitemComponent,
    PersonalCenterComponent,

  ],
  providers: [],
})
export class PersonalCenterModule { }
