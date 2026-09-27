import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'catalogo',
    pathMatch: 'full'
  },
  {
    path: 'home',
    redirectTo: 'catalogo',
    pathMatch: 'full'
  },
  {
    path: 'catalogo',
    loadComponent: () => import('./features/v-catalog/pages/v-catalog-page/v-catalog-page').then(m => m.VCatalogPage),
    data: { breadcrumb: 'Catálogo' }
  },
  {
    path: 'catalogo/veiculos',
    loadComponent: () => import('./features/v-catalog/pages/v-catalog-page/v-catalog-page').then(m => m.VCatalogPage),
    data: { breadcrumb: 'Veículos' }
  },
  {
    path: 'catalogo/marcas',
    loadComponent: () => import('./features/v-brand/pages/v-brand-page/v-brand-page').then(m => m.VBrandPage),
    data: { breadcrumb: 'Marcas' }
  },
  {
    path: 'sobre',
    loadComponent: () => import('./features/v-about/pages/v-about-page/v-about-page').then(m => m.VAboutPage),
    data: { breadcrumb: 'Sobre' }
  },
  {
    path: 'contato',
    loadComponent: () => import('./features/v-contact/pages/v-contact-page/v-contact-page').then(m => m.VContactPage),
    data: { breadcrumb: 'Contato' }
  },
  {
    path: '**',
    redirectTo: 'catalogo',
  }
];
