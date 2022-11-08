import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntregaOtPageRoutingModule } from './entrega-ot-routing.module';

import { EntregaOtPage } from './entrega-ot.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntregaOtPageRoutingModule
  ],
  declarations: [EntregaOtPage]
})
export class EntregaOtPageModule {}
