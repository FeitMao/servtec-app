import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginVentasPageRoutingModule } from './login-ventas-routing.module';

import { LoginVentasPage } from './login-ventas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginVentasPageRoutingModule
  ],
  declarations: [LoginVentasPage]
})
export class LoginVentasPageModule {}
