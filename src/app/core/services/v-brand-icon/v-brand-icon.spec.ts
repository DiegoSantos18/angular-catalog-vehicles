import { TestBed } from '@angular/core/testing';
import { VBrandIcon } from './v-brand-icon';

describe('VBrandIcon', () => {
  let service: VBrandIcon;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VBrandIcon);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
