import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TecSoftwarePage } from './tec-software.page';

const routes: Routes = [
  {
    path: '',
    component: TecSoftwarePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TecSoftwarePageRoutingModule {}
