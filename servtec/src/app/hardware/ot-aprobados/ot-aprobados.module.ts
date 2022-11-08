import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OtAprobadosPageRoutingModule } from './ot-aprobados-routing.module';

import { OtAprobadosPage } from './ot-aprobados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OtAprobadosPageRoutingModule
  ],
  declarations: [OtAprobadosPage]
})
export class OtAprobadosPageModule {}
