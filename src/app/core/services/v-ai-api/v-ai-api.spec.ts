import { TestBed } from '@angular/core/testing';
import { VAiApi } from './v-ai-api';

describe('VAiApi', () => {
  let service: VAiApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VAiApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
