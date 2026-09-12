import { TestBed } from '@angular/core/testing';
import { VCatalogApi } from './v-catalog-api';

describe('VCatalogApiTs', () => {
  let service: VCatalogApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VCatalogApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
