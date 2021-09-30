import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { V4PageRoutingModule } from './v4-routing.module';

import { V4Page } from './v4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    V4PageRoutingModule
  ],
  declarations: [V4Page]
})
export class V4PageModule {}
