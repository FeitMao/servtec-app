import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntregadosPageRoutingModule } from './entregados-routing.module';

import { EntregadosPage } from './entregados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntregadosPageRoutingModule
  ],
  declarations: [EntregadosPage]
})
export class EntregadosPageModule {}
