import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ControlOtPage } from './control-ot.page';

const routes: Routes = [
  {
    path: '',
    component: ControlOtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ControlOtPageRoutingModule {}
