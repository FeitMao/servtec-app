import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SsccPageRoutingModule } from './sscc-routing.module';

import { SsccPage } from './sscc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SsccPageRoutingModule
  ],
  declarations: [SsccPage]
})
export class SsccPageModule {}
