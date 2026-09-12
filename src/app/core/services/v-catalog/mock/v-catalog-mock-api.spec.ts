import { TestBed } from '@angular/core/testing';
import { VCatalogMockApi } from './v-catalog-mock-api';

describe('VehicleMock', () => {
  let service: VCatalogMockApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VCatalogMockApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
