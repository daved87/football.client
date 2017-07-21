import { TestBed, inject } from '@angular/core/testing';

import { ByeWeeksService } from './bye-weeks.service';

describe('ByeWeeksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ByeWeeksService]
    });
  });

  it('should be created', inject([ByeWeeksService], (service: ByeWeeksService) => {
    expect(service).toBeTruthy();
  }));
});
