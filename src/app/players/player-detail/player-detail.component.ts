import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NflPlayersService  } from '../../services/ffn/nfl-players.service';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css'],
  providers: [NflPlayersService]
})
export class PlayerDetailComponent implements OnInit {

  constructor(private _nflPlayersService: NflPlayersService) {

  }

  ngOnInit() {

  }

}
