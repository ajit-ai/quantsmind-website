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
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent)
  },
  {
    path: 'research/:id',
    loadComponent: () => import('./pages/research-detail/research-detail.component').then(m => m.ResearchDetailComponent)
  },
  {
    path: 'services/:id',
    loadComponent: () => import('./pages/service-detail/service-detail.component').then(m => m.ServiceDetailComponent)
  },
  {
    path: 'ecosystem/:id',
    loadComponent: () => import('./pages/ecosystem-detail/ecosystem-detail.component').then(m => m.EcosystemDetailComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
