import { TestBed } from '@angular/core/testing';

import { PreferencialService } from './preferencial.service';

describe('PreferencialService', () => {
  let service: PreferencialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreferencialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
