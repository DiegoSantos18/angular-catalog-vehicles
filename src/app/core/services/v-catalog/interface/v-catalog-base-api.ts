import { Observable } from 'rxjs';
import { VCatalog } from '../../../models/v-catalog/v-catalog';

export abstract class VCatalogBaseApi {
  abstract getVCatalog(): Observable<VCatalog[]>;
  abstract getVCatalogById(id: number): Observable<VCatalog | undefined>;
}
