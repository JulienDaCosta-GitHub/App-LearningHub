import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjetsAnimPage } from './projets-anim.page';

const routes: Routes = [
  {
    path: '',
    component: ProjetsAnimPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjetsAnimPageRoutingModule {}
