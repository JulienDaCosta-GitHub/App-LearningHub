import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoursJvPageRoutingModule } from './cours-jv-routing.module';

import { CoursJvPage } from './cours-jv.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoursJvPageRoutingModule
  ],
  declarations: [CoursJvPage]
})
export class CoursJvPageModule {}
