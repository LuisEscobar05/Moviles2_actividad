import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { V6PageRoutingModule } from './v6-routing.module';

import { V6Page } from './v6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    V6PageRoutingModule
  ],
  declarations: [V6Page]
})
export class V6PageModule {}
