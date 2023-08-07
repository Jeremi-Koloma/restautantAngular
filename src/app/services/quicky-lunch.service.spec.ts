import { TestBed } from '@angular/core/testing';

import { QuickyLunchService } from './quicky-lunch.service';

describe('QuickyLunchService', () => {
  let service: QuickyLunchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuickyLunchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
