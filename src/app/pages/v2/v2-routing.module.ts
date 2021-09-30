import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { V2Page } from './v2.page';

const routes: Routes = [
  {
    path: '',
    component: V2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class V2PageRoutingModule {}
