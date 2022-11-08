import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ControlOtPageRoutingModule } from './control-ot-routing.module';

import { ControlOtPage } from './control-ot.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ControlOtPageRoutingModule
  ],
  declarations: [ControlOtPage]
})
export class ControlOtPageModule {}
