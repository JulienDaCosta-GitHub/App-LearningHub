import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjoutFormPage } from './ajout-form.page';

const routes: Routes = [
  {
    path: '',
    component: AjoutFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjoutFormPageRoutingModule {}
