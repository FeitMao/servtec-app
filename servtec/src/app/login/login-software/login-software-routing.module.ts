import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginSoftwarePage } from './login-software.page';

const routes: Routes = [
  {
    path: '',
    component: LoginSoftwarePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginSoftwarePageRoutingModule {}
