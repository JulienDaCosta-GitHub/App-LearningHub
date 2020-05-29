import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjetsCreaPage } from './projets-crea.page';

const routes: Routes = [
  {
    path: '',
    component: ProjetsCreaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjetsCreaPageRoutingModule {}
