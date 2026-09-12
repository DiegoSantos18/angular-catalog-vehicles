import { Service } from '@angular/core';
import { VCatalogBaseApi } from '../interface/v-catalog-base-api';
import { MOCK_VCatalog } from './v-catalog.mock-data';
import { VCatalog } from '../../../models/v-catalog/v-catalog';
import { delay, Observable, of } from 'rxjs';

@Service()
export class VCatalogMockApi implements VCatalogBaseApi {
  private vCatalog = [...MOCK_VCatalog];

  getVCatalog(): Observable<VCatalog[]> {
    return of(this.vCatalog).pipe(delay(600));
  }

  getVCatalogById(id: number): Observable<VCatalog | undefined> {
    const vCatalog = this.vCatalog.find(v => v.id === id);
    return of(vCatalog).pipe(delay(300));
  }
}
