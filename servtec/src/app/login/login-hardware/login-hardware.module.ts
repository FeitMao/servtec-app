import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginHardwarePageRoutingModule } from './login-hardware-routing.module';

import { LoginHardwarePage } from './login-hardware.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginHardwarePageRoutingModule
  ],
  declarations: [LoginHardwarePage]
})
export class LoginHardwarePageModule {}
