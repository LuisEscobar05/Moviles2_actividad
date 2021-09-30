import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { V5Page } from './v5.page';

const routes: Routes = [
  {
    path: '',
    component: V5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class V5PageRoutingModule {}
