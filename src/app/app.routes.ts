import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'research',
    loadComponent: () => import('./pages/research/research.component').then(m => m.ResearchComponent)
  },
  {
    path: 'research/:id',
    loadComponent: () => import('./pages/research-detail/research-detail.component').then(m => m.ResearchDetailComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
