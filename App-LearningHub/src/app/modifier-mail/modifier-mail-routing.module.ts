import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifierMailPage } from './modifier-mail.page';

const routes: Routes = [
  {
    path: '',
    component: ModifierMailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifierMailPageRoutingModule {}
