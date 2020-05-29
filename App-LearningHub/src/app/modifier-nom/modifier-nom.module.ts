import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifierNomPageRoutingModule } from './modifier-nom-routing.module';

import { ModifierNomPage } from './modifier-nom.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifierNomPageRoutingModule
  ],
  declarations: [ModifierNomPage]
})
export class ModifierNomPageModule {}
