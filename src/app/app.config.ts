import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { VCatalogBaseApi } from './core/services/v-catalog/interface/v-catalog/v-catalog-base-api';
import { VCatalogApi } from './core/services/v-catalog/v-catalog-api';
import { VCatalogMockApi } from './core/services/v-catalog/mock/v-catalog/v-catalog-mock-api';
import { VBrandBaseApi } from './core/services/v-catalog/interface/v-brand/v-brand-base-api';
import { VBrandMockApi } from './core/services/v-catalog/mock/v-brand/v-brand-mock-api';
import { environment } from '@environments/environment';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    {
      provide: VCatalogBaseApi,
      useClass: environment.useMock ? VCatalogMockApi : VCatalogApi
    },
    {
      provide: VBrandBaseApi,
      useClass: environment.useMock ? VBrandMockApi : VCatalogApi
    },
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes)
  ]
};
