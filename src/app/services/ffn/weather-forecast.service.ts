import { Injectable } from '@angular/core';
import { WeatherForecast } from './../../definitions/weather-forecast';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { environment } from './../../../environments/environment';

@Injectable()
export class WeatherForecastService {
  private apiUrl = environment.ffn.weatherForcastApi + environment.ffn.apiKey;

  constructor(private _http_: Http) {
  }

  getWeatherForecast(): Observable<WeatherForecast> {
    return this._http_.get(this.apiUrl)
      .map((res: Response) => <WeatherForecast> res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
  }

}
