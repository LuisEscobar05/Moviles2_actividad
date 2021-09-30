import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { V5PageRoutingModule } from './v5-routing.module';

import { V5Page } from './v5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    V5PageRoutingModule
  ],
  declarations: [V5Page]
})
export class V5PageModule {}
