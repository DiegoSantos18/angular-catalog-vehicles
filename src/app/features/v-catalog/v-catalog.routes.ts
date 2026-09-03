import { Routes } from '@angular/router';
import { VCatalogPage } from './pages/v-catalog-page/v-catalog-page';

export const V_CATALOG_ROUTES: Routes = [
  {
    path: '',
    component: VCatalogPage,
    data: { breadcrumb: 'Catálogo' }
  },
  {
    path: 'catalogo/veiculos',
    component: VCatalogPage,
    data: { breadcrumb: 'Veículos' }
  },
  {
    path: 'catalogo/marcas',
    component: VCatalogPage,
    data: { breadcrumb: 'Marcas' }
  },
  {
    path: 'sobre',
    component: VCatalogPage,
    data: { breadcrumb: 'Sobre' }
  },
  {
    path: 'contato',
    component: VCatalogPage,
    data: { breadcrumb: 'Contato' }
  }
];
