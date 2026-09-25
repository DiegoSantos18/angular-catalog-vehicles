import { TestBed } from '@angular/core/testing';
import { VGobalSearch } from './v-gobal-search';

describe('VGobalSearch', () => {
  let service: VGobalSearch;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VGobalSearch);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
