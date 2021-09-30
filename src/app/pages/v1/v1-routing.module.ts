import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { V1Page } from './v1.page';

const routes: Routes = [
  {
    path: '',
    component: V1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class V1PageRoutingModule {}
