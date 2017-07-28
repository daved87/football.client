import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { NavComponent } from './shared/nav/nav.component';
import { HttpModule } from '@angular/http'
import { Ng2DragDropModule } from 'ng2-drag-drop';
import { PlayerDetailComponent } from './players/player-detail/player-detail.component';
import { PlayersComponent } from './players/players.component';
import { AppRoutingModule } from '../Routes';
import { CreateLeagueComponent } from './league/create-league/create-league.component';
import { LeagueSettingsComponent } from './league/league-settings/league-settings.component';
import { LeagueComponent } from './league/league.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PlayerDetailComponent,
    PlayersComponent,
    CreateLeagueComponent,
    LeagueSettingsComponent,
    LeagueComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgbModule.forRoot(),
    Ng2DragDropModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
