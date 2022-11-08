import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntregaOtPage } from './entrega-ot.page';

const routes: Routes = [
  {
    path: '',
    component: EntregaOtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntregaOtPageRoutingModule {}
