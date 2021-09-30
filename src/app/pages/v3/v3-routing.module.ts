import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { V3Page } from './v3.page';

const routes: Routes = [
  {
    path: '',
    component: V3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class V3PageRoutingModule {}
