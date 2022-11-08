import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TecHardwarePageRoutingModule } from './tec-hardware-routing.module';

import { TecHardwarePage } from './tec-hardware.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TecHardwarePageRoutingModule
  ],
  declarations: [TecHardwarePage]
})
export class TecHardwarePageModule {}
