import { TestBed } from '@angular/core/testing';
import { VBrandMockApi } from './v-brand-mock-api';

describe('VehicleMock', () => {
  let service: VBrandMockApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VBrandMockApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
