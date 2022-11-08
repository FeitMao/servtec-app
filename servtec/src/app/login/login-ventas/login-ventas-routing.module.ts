import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginVentasPage } from './login-ventas.page';

const routes: Routes = [
  {
    path: '',
    component: LoginVentasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginVentasPageRoutingModule {}
