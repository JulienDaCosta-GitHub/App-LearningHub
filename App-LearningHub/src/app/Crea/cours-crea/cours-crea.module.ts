import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoursCreaPageRoutingModule } from './cours-crea-routing.module';

import { CoursCreaPage } from './cours-crea.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoursCreaPageRoutingModule
  ],
  declarations: [CoursCreaPage]
})
export class CoursCreaPageModule {}
