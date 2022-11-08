import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AprobadosPageRoutingModule } from './aprobados-routing.module';

import { AprobadosPage } from './aprobados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AprobadosPageRoutingModule
  ],
  declarations: [AprobadosPage]
})
export class AprobadosPageModule {}
