import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TecSoftwarePageRoutingModule } from './tec-software-routing.module';

import { TecSoftwarePage } from './tec-software.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TecSoftwarePageRoutingModule
  ],
  declarations: [TecSoftwarePage]
})
export class TecSoftwarePageModule {}
