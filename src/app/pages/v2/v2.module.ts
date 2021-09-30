import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { V2PageRoutingModule } from './v2-routing.module';

import { V2Page } from './v2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    V2PageRoutingModule
  ],
  declarations: [V2Page]
})
export class V2PageModule {}
