import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifierPrenomPageRoutingModule } from './modifier-prenom-routing.module';

import { ModifierPrenomPage } from './modifier-prenom.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifierPrenomPageRoutingModule
  ],
  declarations: [ModifierPrenomPage]
})
export class ModifierPrenomPageModule {}
