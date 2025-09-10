import { TestBed } from '@angular/core/testing';

import { DanceDataService } from './dance-data.service';

describe('DanceDataService', () => {
  let service: DanceDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DanceDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
