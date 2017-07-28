import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayersComponent } from './app/players/players.component';
import { PlayerDetailComponent } from './app/players/player-detail/player-detail.component';
import { CreateLeagueComponent } from './app/league/create-league/create-league.component';
import { LeagueComponent } from './app/league/league.component';

const routes: Routes = [
    {
        path: '',
        component: PlayersComponent
    },
    {
        path: 'players',
        component: PlayersComponent
    },
    {
        path: 'players/:id',
        component: PlayerDetailComponent
    },
    {
        path: 'league',
        component: LeagueComponent
    },
    {
        path: 'league/create',
        component: CreateLeagueComponent
    },

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }
