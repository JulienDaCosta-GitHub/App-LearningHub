import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoursAnimPageRoutingModule } from './cours-anim-routing.module';

import { CoursAnimPage } from './cours-anim.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoursAnimPageRoutingModule
  ],
  declarations: [CoursAnimPage]
})
export class CoursAnimPageModule {}
