import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjetsDevPage } from './projets-dev.page';

const routes: Routes = [
  {
    path: '',
    component: ProjetsDevPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjetsDevPageRoutingModule {}
