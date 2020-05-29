import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifierPrenomPage } from './modifier-prenom.page';

const routes: Routes = [
  {
    path: '',
    component: ModifierPrenomPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifierPrenomPageRoutingModule {}
