import { NgModule } from '@angular/core';
import {PayovertimeComponent} from "./payovertime.component";
import {PayovertimeRoutingModule} from "./payovertime-routing.module";


@NgModule({
  imports: [
    PayovertimeRoutingModule
  ],
  exports: [

  ],
  declarations: [
    PayovertimeComponent
  ],
  providers: [],
})
export class PayovertimeModule { }
