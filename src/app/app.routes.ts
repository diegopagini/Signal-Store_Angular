import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'one',
    loadComponent: () =>
      import('./pages/one/one.component').then((c) => c.OneComponent),
  },
  {
    path: 'two',
    loadComponent: () =>
      import('./pages/two/two.component').then((c) => c.TwoComponent),
  },
  {
    path: 'ssr',
    loadComponent: () =>
      import('./pages/ssr/ssr.component').then((c) => c.SsrComponent),
  },
  {
    path: '',
    redirectTo: 'one',
    pathMatch: 'full',
  },
];
