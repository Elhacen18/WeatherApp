import { HttpContext } from '@angular/common/http';
import { Component, HostBinding, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
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
  selector: 'app-seven-days-forecast',
  templateUrl: './seven-days-forecast.component.html',
  styleUrls: ['./seven-days-forecast.component.css'],
})
export class SevenDaysForecastComponent implements OnInit {
  CurrentData: WeatherModel;
  Forcast: any[];
  Hourly: any[];
  isShown: boolean = false;
  @HostBinding('class') className = '';
  toggleControl = new FormControl(false);
  constructor(private WweatherApiService: WeatherApiService) {}

  ngOnInit(): void {
    // this.toggleControl.valueChanges.subscribe((darkMode) => {
    //   const darkClassName = 'darkMode';
    //   this.className = darkMode ? darkClassName : '';
    // });
    this.GetSeventDayForcast();
  }
  GetSeventDayForcast() {
    this.WweatherApiService.curretnWeather.subscribe((Currentweather) => {
      this.CurrentData = Currentweather;
      this.Forcast = this.CurrentData.Dialy;
      // console.log('hours');
      // console.log(this.Forcast);
      console.log("BY CIRY FROM SEVENT DAY")
    });
  }
  DisplayHourDaily(Event: any) {
    this.isShown = !this.isShown;
    if (this.isShown) {
      document.getElementsByClassName('SevenDays')[0].innerHTML =
        '24 hours forcast';
      console.log('works?');
    } else {
      document.getElementsByClassName('SevenDays')[0].innerHTML =
        '7 days forcast';
      console.log('works?');
    }
  }
}
