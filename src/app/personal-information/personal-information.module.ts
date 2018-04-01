import { NgModule } from '@angular/core';
import {PersonalInformationComponent} from "./personal-information.component";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {AddressModule} from "../address/address.module";
;


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AddressModule
  ],
  exports: [
    PersonalInformationComponent
  ],
  declarations: [
    PersonalInformationComponent
  ],
  providers: [],
})
export class PersonalInformationModule { }
