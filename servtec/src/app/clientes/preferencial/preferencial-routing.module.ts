import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreferencialPage } from './preferencial.page';

const routes: Routes = [
  {
    path: '',
    component: PreferencialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreferencialPageRoutingModule {}
