import { Service } from '@angular/core';
import { VBrandBaseApi } from '../../interface/v-brand/v-brand-base-api';
import { MOCK_VBrand } from '../../mock/v-brand/v-brand.mock-data';
import { VBrand } from '../../../../models/v-brand/v-brand';
import { delay, Observable, of } from 'rxjs';

@Service()
export class VBrandMockApi implements VBrandBaseApi {
  private vBrand = [...MOCK_VBrand];

  getVBrand(): Observable<VBrand[]> {
    return of(this.vBrand).pipe(delay(600));
  }

  getVBrandById(id: number): Observable<VBrand | undefined> {
    const vBrand = this.vBrand.find(v => v.id === id);
    return of(vBrand).pipe(delay(300));
  }
}
