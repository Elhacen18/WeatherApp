import { Component, OnInit } from '@angular/core';
import { WeatherApiService } from '../Service/weather-api.service';
class WeatherModel {
  CityName: string;
  StateName: string;
  CountryName: string;
  feels_like: number;
  humidity: number;
  precipitation: number;
  pressure: number;
  sunrise: any;
  sunset: any;
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
  Hourly: any[];
}
@Component({
  selector: 'app-hours-forcast',
  templateUrl: './hours-forcast.component.html',
  styleUrls: ['./hours-forcast.component.css'],
})
export class HoursForcastComponent implements OnInit {
  CurrentData: WeatherModel;
  Hourly: any[24];
  HourlyForcasr:any[];
  iWeather: any;
  isShown: boolean = false;
  constructor(private WweatherApiService: WeatherApiService) {
    this.iWeather = 0;
  }

  ngOnInit(): void {
    this.GetSeventDayForcast();
    this.setShownData() ;
  }
  GetSeventDayForcast() {
    this.WweatherApiService.curretnWeather.subscribe((Currentweather) => {
      this.CurrentData = Currentweather;
      this.Hourly = this.CurrentData.Hourly.slice(0,24);
      console.log(this.Hourly);
      console.log('BY CIRY FROM HOUR FORCAST');
    });
  }
  setShownData() {
    this.HourlyForcasr = this.Hourly.slice(this.iWeather *8,(this.iWeather + 1) * 8);
    console.log(this.Hourly);
  }
  previous() {
    if (this.iWeather != 0) {
      this.iWeather = this.iWeather - 1;
      console.log("Works :");

      this.setShownData();
    }
  }

  next() {
    if ((this.iWeather + 1) * 8 < this.Hourly.length) {
      this.iWeather = this.iWeather + 1;
      console.log("Works :");
      this.setShownData();
    }
  }
}
