import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VistaOtPageRoutingModule } from './vista-ot-routing.module';

import { VistaOtPage } from './vista-ot.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VistaOtPageRoutingModule
  ],
  declarations: [VistaOtPage]
})
export class VistaOtPageModule {}
