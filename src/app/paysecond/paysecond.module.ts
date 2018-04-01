import { NgModule } from '@angular/core';
import {ConfirmstepComponent} from "./confirm/confirmstep/confirmstep.component";
import {ConfirmComponent} from "./confirm/confirm.component";
import {PaysecondComponent} from "./paysecond.component";
import {PaysecondRoutingModule} from "./paysecond-routing.module";

@NgModule({
  imports: [
    PaysecondRoutingModule
  ],
  exports: [

  ],
  declarations: [
    ConfirmstepComponent,
    ConfirmComponent,
    PaysecondComponent
  ],
  providers: [],
})
export class PaysecondModule { }
