import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreferencialPageRoutingModule } from './preferencial-routing.module';

import { PreferencialPage } from './preferencial.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreferencialPageRoutingModule
  ],
  declarations: [PreferencialPage]
})
export class PreferencialPageModule {}
