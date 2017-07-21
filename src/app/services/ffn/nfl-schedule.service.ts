import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { environment } from './../../../environments/environment';
import { NflSchedule } from './../../definitions/nfl-schedule';

@Injectable()
export class NflScheduleService {
  private apiUrl = environment.ffn.nflScheduleApi + environment.ffn.apiKey;

  constructor(private _http_: Http) {
  }

  getNflSchedule(): Observable<NflSchedule> {
    return this._http_.get(this.apiUrl)
      .map((res: Response) => <NflSchedule> res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
  }
}
