import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursCreaPage } from './cours-crea.page';

const routes: Routes = [
  {
    path: '',
    component: CoursCreaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursCreaPageRoutingModule {}
