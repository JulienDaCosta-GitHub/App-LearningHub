import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProjetsJvPageRoutingModule } from './projets-jv-routing.module';

import { ProjetsJvPage } from './projets-jv.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProjetsJvPageRoutingModule
  ],
  declarations: [ProjetsJvPage]
})
export class ProjetsJvPageModule {}
