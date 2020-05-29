import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifierNomPage } from './modifier-nom.page';

const routes: Routes = [
  {
    path: '',
    component: ModifierNomPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifierNomPageRoutingModule {}
