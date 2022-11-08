import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OtAprobadosPage } from './ot-aprobados.page';

const routes: Routes = [
  {
    path: '',
    component: OtAprobadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OtAprobadosPageRoutingModule {}
