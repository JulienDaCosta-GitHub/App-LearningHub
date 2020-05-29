import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifierMailPageRoutingModule } from './modifier-mail-routing.module';

import { ModifierMailPage } from './modifier-mail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifierMailPageRoutingModule
  ],
  declarations: [ModifierMailPage]
})
export class ModifierMailPageModule {}
