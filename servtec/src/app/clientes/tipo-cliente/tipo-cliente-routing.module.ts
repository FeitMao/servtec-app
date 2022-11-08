import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TipoClientePage } from './tipo-cliente.page';

const routes: Routes = [
  {
    path: '',
    component: TipoClientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TipoClientePageRoutingModule {}
