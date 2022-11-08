import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VistaOtPage } from './vista-ot.page';

const routes: Routes = [
  {
    path: '',
    component: VistaOtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VistaOtPageRoutingModule {}
