import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OtPresupuestosPageRoutingModule } from './ot-presupuestos-routing.module';

import { OtPresupuestosPage } from './ot-presupuestos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OtPresupuestosPageRoutingModule
  ],
  declarations: [OtPresupuestosPage]
})
export class OtPresupuestosPageModule {}
