import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'v1',
    loadChildren: () => import('./pages/v1/v1.module').then( m => m.V1PageModule)
  },
  {
    path: 'v2',
    loadChildren: () => import('./pages/v2/v2.module').then( m => m.V2PageModule)
  },
  {
    path: 'v3',
    loadChildren: () => import('./pages/v3/v3.module').then( m => m.V3PageModule)
  },
  {
    path: 'v4',
    loadChildren: () => import('./pages/v4/v4.module').then( m => m.V4PageModule)
  },
  {
    path: 'v5',
    loadChildren: () => import('./pages/v5/v5.module').then( m => m.V5PageModule)
  },
  {
    path: 'v6',
    loadChildren: () => import('./pages/v6/v6.module').then( m => m.V6PageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'v1',
    loadChildren: () => import('./pages/v1/v1.module').then( m => m.V1PageModule)
  },
  {
    path: 'v2',
    loadChildren: () => import('./pages/v2/v2.module').then( m => m.V2PageModule)
  },
  {
    path: 'v3',
    loadChildren: () => import('./pages/v3/v3.module').then( m => m.V3PageModule)
  },
  {
    path: 'v4',
    loadChildren: () => import('./pages/v4/v4.module').then( m => m.V4PageModule)
  },
  {
    path: 'v5',
    loadChildren: () => import('./pages/v5/v5.module').then( m => m.V5PageModule)
  },
  {
    path: 'v6',
    loadChildren: () => import('./pages/v6/v6.module').then( m => m.V6PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
