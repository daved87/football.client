import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { environment } from './../../../environments/environment';
import { NflTeam } from './../../definitions/nfl-team';

@Injectable()
export class NflTeamsService {
  private apiUrl = environment.ffn.nflTeamsApi + environment.ffn.apiKey;

  constructor(private _http_: Http) {
  }

  getNflTeams(): Observable<NflTeam[]> {
    const headers: Headers = new Headers();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'GET');
    headers.append('Access-Control-Allow-Headers', 'json');

    return this._http_.get(this.apiUrl, {headers: headers})
      .map((res: Response) => <NflTeam[]> res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
  }
}
