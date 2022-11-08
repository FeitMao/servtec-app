import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterSSPage } from './register-ss.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterSSPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterSSPageRoutingModule {}
