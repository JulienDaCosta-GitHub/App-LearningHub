import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursAnimPage } from './cours-anim.page';

const routes: Routes = [
  {
    path: '',
    component: CoursAnimPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursAnimPageRoutingModule {}
