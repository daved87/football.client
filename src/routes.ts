import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayersComponent } from './app/players/players.component';
import { PlayerDetailComponent } from './app/players/player-detail/player-detail.component';

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
    }
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
