import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginHardwarePage } from './login-hardware.page';

const routes: Routes = [
  {
    path: '',
    component: LoginHardwarePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginHardwarePageRoutingModule {}
