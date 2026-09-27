import { inject, Service } from '@angular/core';
import { VCatalogBaseApi } from './interface/v-catalog/v-catalog-base-api';
import { VBrandBaseApi } from './interface/v-brand/v-brand-base-api';
import { Observable, of, delay } from 'rxjs';
import { VCatalog } from '../../models/v-catalog/v-catalog';
import { VBrand } from '../../models/v-brand/v-brand';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { MOCK_VCatalog } from './mock/v-catalog/v-catalog.mock-data';
import { MOCK_VBrand } from './mock/v-brand/v-brand.mock-data';

@Service()
export class VCatalogApi implements VCatalogBaseApi, VBrandBaseApi {
  private http = inject(HttpClient);
  private vehiclesUrl = `${environment.catalogApiUrl}/vehicles`;
  private brandsUrl = `${environment.catalogApiUrl}/brands`;

  getVCatalog(): Observable<VCatalog[]> {
    if (environment.useMock) {
      return of(MOCK_VCatalog).pipe(delay(400));
    }
    return this.http.get<VCatalog[]>(this.vehiclesUrl);
  }

  getVCatalogById(id: number): Observable<VCatalog | undefined> {
    if (environment.useMock) {
      return of(MOCK_VCatalog.find(v => v.id === id)).pipe(delay(200));
    }
    return this.http.get<VCatalog>(`${this.vehiclesUrl}/${id}`);
  }

  getVBrand(): Observable<VBrand[]> {
    if (environment.useMock) {
      return of(MOCK_VBrand).pipe(delay(400));
    }
    return this.http.get<VBrand[]>(this.brandsUrl);
  }

  getVBrandById(id: number): Observable<VBrand | undefined> {
    if (environment.useMock) {
      return of(MOCK_VBrand.find(b => b.id === id)).pipe(delay(200));
    }
    return this.http.get<VBrand>(`${this.brandsUrl}/${id}`);
  }
}
