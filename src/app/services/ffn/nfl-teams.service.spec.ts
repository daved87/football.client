import { TestBed, inject } from '@angular/core/testing';

import { NflTeamsService } from './nfl-teams.service';

describe('NflTeamsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NflTeamsService]
    });
  });

  it('should be created', inject([NflTeamsService], (service: NflTeamsService) => {
    expect(service).toBeTruthy();
  }));
});
