import { Observable } from 'rxjs';
import { VBrand } from '../../../../models/v-brand/v-brand';

export abstract class VBrandBaseApi {
  abstract getVBrand(): Observable<VBrand[]>;
  abstract getVBrandById(id: number): Observable<VBrand | undefined>;
}
