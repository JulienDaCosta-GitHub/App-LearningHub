import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProjetsDevPageRoutingModule } from './projets-dev-routing.module';

import { ProjetsDevPage } from './projets-dev.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProjetsDevPageRoutingModule
  ],
  declarations: [ProjetsDevPage]
})
export class ProjetsDevPageModule {}
