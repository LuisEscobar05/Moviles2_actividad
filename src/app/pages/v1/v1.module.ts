import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { V1PageRoutingModule } from './v1-routing.module';

import { V1Page } from './v1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    V1PageRoutingModule
  ],
  declarations: [V1Page]
})
export class V1PageModule {}
