import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjetsComdPage } from './projets-comd.page';

const routes: Routes = [
  {
    path: '',
    component: ProjetsComdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjetsComdPageRoutingModule {}
