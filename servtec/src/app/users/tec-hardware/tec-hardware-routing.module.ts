import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TecHardwarePage } from './tec-hardware.page';

const routes: Routes = [
  {
    path: '',
    component: TecHardwarePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TecHardwarePageRoutingModule {}
