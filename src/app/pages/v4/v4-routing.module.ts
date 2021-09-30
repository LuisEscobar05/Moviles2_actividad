import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { V4Page } from './v4.page';

const routes: Routes = [
  {
    path: '',
    component: V4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class V4PageRoutingModule {}
