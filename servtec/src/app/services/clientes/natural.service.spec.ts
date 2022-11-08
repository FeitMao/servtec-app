import { TestBed } from '@angular/core/testing';

import { NaturalService } from './natural.service';

describe('NaturalService', () => {
  let service: NaturalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NaturalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
