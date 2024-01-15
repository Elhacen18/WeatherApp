import { Component, Input, OnInit } from '@angular/core';
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
  Dialy:any[];
  Hourly:any[];


}
@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css'],
})
export class CurrentWeatherComponent implements OnInit {
  CurrentData: WeatherModel = new WeatherModel();
  WeatherIcon: string = '';
  constructor(private WweatherApiService: WeatherApiService) {}

  ngOnInit(): void {
    this.getCurrentWeather();
  }
  getCurrentWeather() {
    this.WweatherApiService.curretnWeather.subscribe((Currentweather) => {
      this.CurrentData = Currentweather;
    });
  }
  GetWeatherByCity() {
    this.WweatherApiService.CityWeather.subscribe((CityWeather) => {
      this.CurrentData = CityWeather;
      console.log(this.CurrentData);
      console.log(CityWeather);
    });
  }

}
