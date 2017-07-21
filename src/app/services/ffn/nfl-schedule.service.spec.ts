import { TestBed, inject } from '@angular/core/testing';

import { NflScheduleService } from './nfl-schedule.service';

describe('NflScheduleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NflScheduleService]
    });
  });

  it('should be created', inject([NflScheduleService], (service: NflScheduleService) => {
    expect(service).toBeTruthy();
  }));
});
