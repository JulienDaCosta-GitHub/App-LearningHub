import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursDevPage } from './cours-dev.page';

const routes: Routes = [
  {
    path: '',
    component: CoursDevPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursDevPageRoutingModule {}
