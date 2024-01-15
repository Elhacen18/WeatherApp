import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

class WeatherModel {
  CityName: string;
  StateName: string;
  CountryName: string;
  feels_like: number;
  humidity: number;
  precipitation: number;
  pressure: number;
  sunrise: bigint;
  sunset: bigint;
  temp: number;
  visibility: number;

  description: string;
  icon: string;
  id: number;
  main: string;

  wind_deg: number;
  wind_speed: any;
  timezone: string;
  Dialy: any[];
  Hourly:any[];
}
@Injectable({
  providedIn: 'root',
})
export class WeatherApiService {
  result: string;
  APIKEY: string = '31e8cbda196c1866ccf36cc66e8b835c';
  URL: string = 'https://api.openweathermap.org/data/2.5/onecall?';
  constructor(private httpsWaether: HttpClient) {}
  currentWeather: WeatherModel = new WeatherModel();
  UserSearchResult: WeatherModel = new WeatherModel();

  curretnWeather = new BehaviorSubject<WeatherModel>(this.currentWeather);
  CityWeather = new BehaviorSubject<WeatherModel>(this.UserSearchResult);

  GetWeatehrByCityName(Userlat: number, Userlon: number): Observable<any> {
    return this.httpsWaether.get(
      this.URL +
        '&lat=' +
        Userlon +
        '&lon=' +
        Userlat +
        '&appid=' +
        this.APIKEY +
        '&&units=imperial'
    );
  }
  public GetWeatehrByUserLocation(
    Userlat: number,
    Userlon: number
  ): Observable<any> {
    return this.httpsWaether.get<any>(
      this.URL +
        '&lat=' +
        Userlon +
        '&lon=' +
        Userlat +
        '&appid=' +
        this.APIKEY +
        '&&units=imperial'
    );
  }

  CurrentWeather(CurrentWeather: WeatherModel) {
    this.curretnWeather.next(CurrentWeather);
  }
  WeatherByCity(CityWeather: WeatherModel) {
    this.CityWeather.next(CityWeather);
  }
}
