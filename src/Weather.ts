import { Time } from "@angular/common";

class Weather {
  City:string='';
  Country:string='';
  Date:Date = new Date("");
  Temperature:number=0;
  Main:string='';
  WeatherConditionId:number=0;
  WeatherIconId:number=0;
  Humidity:string='';
  Precipitation:string='';
  Wind:string = '';
  Pressure:string='';
  FeelsLike:number=0;
  Visibility:number=0;
  SunSet:Date = new Date();
  SunRise:Date = new Date();

}