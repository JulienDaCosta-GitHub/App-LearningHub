import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoursDevPageRoutingModule } from './cours-dev-routing.module';

import { CoursDevPage } from './cours-dev.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoursDevPageRoutingModule
  ],
  declarations: [CoursDevPage]
})
export class CoursDevPageModule {}
