import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { NavComponent } from './shared/nav/nav.component';
import { HttpModule } from '@angular/http'
import { Ng2DragDropModule } from 'ng2-drag-drop';
import { PlayerDetailComponent } from './players/player-detail/player-detail.component';
import { PlayersComponent } from './players/players.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PlayerDetailComponent,
    PlayersComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgbModule.forRoot(),
    Ng2DragDropModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
