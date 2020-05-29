import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProjetsCreaPageRoutingModule } from './projets-crea-routing.module';

import { ProjetsCreaPage } from './projets-crea.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProjetsCreaPageRoutingModule
  ],
  declarations: [ProjetsCreaPage]
})
export class ProjetsCreaPageModule {}
