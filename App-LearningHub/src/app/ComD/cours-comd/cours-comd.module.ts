import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoursComdPageRoutingModule } from './cours-comd-routing.module';

import { CoursComdPage } from './cours-comd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoursComdPageRoutingModule
  ],
  declarations: [CoursComdPage]
})
export class CoursComdPageModule {}
