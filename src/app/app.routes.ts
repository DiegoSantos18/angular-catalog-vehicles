import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/v-catalog/v-catalog.routes').then(m => m.V_CATALOG_ROUTES)
  },
  {
    path: '**',
    redirectTo: '',
  }
];
