import { TestBed, inject } from '@angular/core/testing';

import { NflPlayersService } from './nfl-players.service';

describe('NflPlayersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NflPlayersService]
    });
  });

  it('should be created', inject([NflPlayersService], (service: NflPlayersService) => {
    expect(service).toBeTruthy();
  }));
});
