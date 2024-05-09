import { Routes } from '@angular/router';
import { dotcmsClientResolver } from './lib/resolver/dotcms-client.resolver';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/index',
    pathMatch: 'full',
  },
  // {
  //   path: 'index',
  //   loadComponent: () =>
  //     import('./pages/home/home.component').then((m) => m.HomeComponent),
  // },
  {
    path: ':id',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
    resolve: {
      data: dotcmsClientResolver,
    },
  },
  // {
  //   path: 'blog',
  //   loadComponent: () =>
  //     import('./pages/travel/travel.component').then((m) => m.TravelComponent),
  // },
];
