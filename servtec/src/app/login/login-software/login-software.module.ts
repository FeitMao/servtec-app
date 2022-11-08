import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginSoftwarePageRoutingModule } from './login-software-routing.module';

import { LoginSoftwarePage } from './login-software.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginSoftwarePageRoutingModule
  ],
  declarations: [LoginSoftwarePage]
})
export class LoginSoftwarePageModule {}
