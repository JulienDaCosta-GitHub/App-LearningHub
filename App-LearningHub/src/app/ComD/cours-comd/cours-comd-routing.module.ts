import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursComdPage } from './cours-comd.page';

const routes: Routes = [
  {
    path: '',
    component: CoursComdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursComdPageRoutingModule {}
