import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { environment } from './../../../environments/environment';
import { NflPlayer } from './../../definitions/nfl-player';

@Injectable()
export class NflPlayersService {
private apiUrl = environment.ffn.nflPlayersApi + environment.ffn.apiKey;

  constructor(private _http_: Http) {
  }


/** You can optionally request a specific position: QB, RB, WR, TE, K, DEF
    to return only ACTIVE players among that position. Leave the position parameter
    empty to retrieve all players including inactive players. */
  getNflPlayers(position: string = ''): Observable<NflPlayer[]> {
    return this._http_.get(this.apiUrl + '/' + position)
      .map((res: Response) => <NflPlayer[]> res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
  }
}
