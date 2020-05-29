import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursJvPage } from './cours-jv.page';

const routes: Routes = [
  {
    path: '',
    component: CoursJvPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursJvPageRoutingModule {}
