import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OtPresupuestosPage } from './ot-presupuestos.page';

const routes: Routes = [
  {
    path: '',
    component: OtPresupuestosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OtPresupuestosPageRoutingModule {}
