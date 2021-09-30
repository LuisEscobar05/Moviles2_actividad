import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { V6Page } from './v6.page';

const routes: Routes = [
  {
    path: '',
    component: V6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class V6PageRoutingModule {}
