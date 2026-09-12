import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { VCatalogBaseApi } from './core/services/v-catalog/interface/v-catalog-base-api';
import { VCatalogApi } from './core/services/v-catalog/v-catalog-api';
import { VCatalogMockApi } from './core/services/v-catalog/mock/v-catalog-mock-api';
import { environment } from '@environments/environment';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    {
      provide: VCatalogBaseApi,
      useClass: environment.useMock ? VCatalogMockApi : VCatalogApi
    },
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes)
  ]
};
