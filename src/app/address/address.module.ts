import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {AddressComponent} from "./address.component";



@NgModule({
  imports: [
    CommonModule,
    FormsModule

  ],
  exports: [
    AddressComponent
  ],
  declarations: [
    AddressComponent
  ],
  providers: [],
})
export class AddressModule { }

