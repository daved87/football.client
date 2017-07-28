import { Component, OnInit } from '@angular/core';
import { NflTeamsService  } from './services/ffn/nfl-teams.service';
import { NflTeam } from './definitions/nfl-team';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NflTeamsService]
})
export class AppComponent implements OnInit {
  title = 'home';
  teams: NflTeam[];
  private nflTeamsService: NflTeamsService;

  constructor(private _nflTeamsService_: NflTeamsService) {
    this.nflTeamsService = _nflTeamsService_;
  }

  ngOnInit() {
    // this.loadTeams();
  }

  loadTeams() {
    this.nflTeamsService.getNflTeams()
      .subscribe(
        teams => {
          this.teams = teams['NFLTeams'];
          console.log(this.teams)
        },
        err => { console.log(err) }
      )

  }

  onItemDrop(e: any) {
      // Get the dropped data here
      this.teams.push(e.dragData);
  }

}
