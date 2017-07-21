import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { environment } from './../../../environments/environment';
import { ByeWeek } from './../../definitions/bye-week';

@Injectable()
export class ByeWeeksService {
private apiUrl = environment.ffn.nflTeamByeWeekApi + environment.ffn.apiKey;

  constructor(private _http_: Http) {
  }

  getByeWeeks(): Observable<ByeWeek> {
    return this._http_.get(this.apiUrl)
      .map((res: Response) => <ByeWeek> res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
  }
}
