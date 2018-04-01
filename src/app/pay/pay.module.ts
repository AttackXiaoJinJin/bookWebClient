import { NgModule } from '@angular/core';
import {PayComponent} from "./pay.component";
import {AddressShowComponent} from "./address-show/address-show.component";
import {BuyComponent} from "./buy/buy.component";
import {SuccessComponent} from "./success/success.component";
import {PayRoutingModule} from "./pay-routing.module";
import {BuystepComponent} from "./buy/buystep/buystep.component";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
@NgModule({
  imports: [
    PayRoutingModule,
    FormsModule,
    CommonModule
  ],
  exports: [

  ],
  declarations: [
    AddressShowComponent,
    BuyComponent,
    SuccessComponent,
    PayComponent,
    BuystepComponent
  ],
  providers: [],
})
export class PayModule { }
