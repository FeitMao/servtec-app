import { TestBed } from '@angular/core/testing';

import { ServiceotService } from './serviceot.service';

describe('ServiceotService', () => {
  let service: ServiceotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
