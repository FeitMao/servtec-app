import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterSSPageRoutingModule } from './register-ss-routing.module';

import { RegisterSSPage } from './register-ss.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterSSPageRoutingModule
  ],
  declarations: [RegisterSSPage]
})
export class RegisterSSPageModule {}
