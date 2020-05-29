import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProjetsAnimPageRoutingModule } from './projets-anim-routing.module';

import { ProjetsAnimPage } from './projets-anim.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProjetsAnimPageRoutingModule
  ],
  declarations: [ProjetsAnimPage]
})
export class ProjetsAnimPageModule {}
