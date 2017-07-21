import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { environment } from './../../../environments/environment';
import { ByeWeekResponse } from './../../definitions/bye-week';

@Injectable()
export class ByeWeeksService {
private apiUrl = environment.ffn.nflTeamByeWeekApi + environment.ffn.apiKey;

  constructor(private _http_: Http) {
  }

  getByeWeeks(): Observable<ByeWeekResponse> {
    return this._http_.get(this.apiUrl)
      .map((res: Response) => <ByeWeekResponse> res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
  }
}
