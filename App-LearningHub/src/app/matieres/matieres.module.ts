import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MatieresPageRoutingModule } from './matieres-routing.module';

import { MatieresPage } from './matieres.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatieresPageRoutingModule
  ],
  declarations: [MatieresPage]
})
export class MatieresPageModule {}
