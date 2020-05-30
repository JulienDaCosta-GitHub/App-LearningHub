import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjoutFormPageRoutingModule } from './ajout-form-routing.module';

import { AjoutFormPage } from './ajout-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjoutFormPageRoutingModule
  ],
  declarations: [AjoutFormPage]
})
export class AjoutFormPageModule {}
