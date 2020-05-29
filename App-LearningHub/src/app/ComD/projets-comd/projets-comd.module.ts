import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProjetsComdPageRoutingModule } from './projets-comd-routing.module';

import { ProjetsComdPage } from './projets-comd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProjetsComdPageRoutingModule
  ],
  declarations: [ProjetsComdPage]
})
export class ProjetsComdPageModule {}
