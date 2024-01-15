import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { Options } from 'ngx-google-places-autocomplete/objects/options/options';
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
  Hourly: any[24];
}
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  constructor(
    private WweatherApiService: WeatherApiService,
    private formBuilder: FormBuilder
  ) {}

  public weatherSearchForm: FormGroup = this.formBuilder.group({
    location: [''],
  });
  userSearchLocation: Address;
  result: WeatherModel = new WeatherModel();
  UserLocation: string;
  UserSearchValue: string;
  Complete: boolean = false;
  ngOnInit(): void {
    this.getLocation();
    this.Complete = true;
  }
  DoSearch(Location: string): void {
    this.UserSearchValue = this.weatherSearchForm.get('location')?.value;
    this.weatherSearchForm.reset();
  }
  getLocation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const longitude = position.coords.longitude;
        const latitude = position.coords.latitude;
        this.UserLocation = 'Long: ' + longitude + ', Lati: ' + latitude;
        // console.log(longitude + ', \n', latitude);
        this.GetWeatherByUserLocation(longitude, latitude);
        this.GetUserLocationName(longitude, latitude);
      });
    } else {
      console.log('No support for geolocation');
    }
  }
  // Get the name of user location using lan and lat
  public GetUserLocationName(longitude: number, latitude: number) {
    var latlng = new google.maps.LatLng(latitude, longitude);
    // This is making the Geocode request
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({ location: latlng }, (results, status) => {
      // console.log(results);
      if (status == google.maps.GeocoderStatus.OK) {
        if (results[1]) {
          var indice = 0;
          for (var j = 0; j < results.length; j++) {
            if (results[j].types[0] == 'locality') {
              indice = j;
              break;
            }
          }
          // alert('The good number is: ' + j);
          // console.log(results[j]);
          for (var i = 0; i < results[j].address_components.length; i++) {
            if (results[j].address_components[i].types[0] == 'locality') {
              //this is the object you are looking for City
              let city = results[j].address_components[i].long_name;
              this.result.CityName = city;
            }
            if (
              results[j].address_components[i].types[0] ==
              'administrative_area_level_1'
            ) {
              //this is the object you are looking for State
              let region = results[j].address_components[i].short_name;
              this.result.StateName = region;
            }
            if (results[j].address_components[i].types[0] == 'country') {
              //this is the object you are looking for
              let country = results[j].address_components[i].long_name;
              this.result.CountryName = country;
            }
          }
        }
      }
      this.result.CityName =
        this.result.CityName +
        ', ' +
        this.result.StateName +
        ', ' +
        this.result.CountryName;
    });
  }
  options = {
    types: ['geocode'], //this should work !
  } as unknown as Options;
  public AddressChange(Location: Address) {
    let lat = Location.geometry.location.lat();
    let lng = Location.geometry.location.lng();
    this.userSearchLocation = Location;
    this.GetWeatherByCity(lng, lat);
  }
  GetWeatherByUserLocation(longitude: number, latitude: number) {
    this.WweatherApiService.GetWeatehrByUserLocation(
      longitude,
      latitude
    ).subscribe(
      (response: any) => {
        this.result.sunrise = response.current.sunrise;
        this.result.sunset = response.current.sunset;
        this.result.main = response.current.weather[0].main;
        this.result.humidity = response.current.humidity;
        this.result.wind_speed = response.current.wind_speed;
        this.result.pressure = response.current.pressure;
        this.result.feels_like = response.current.feels_like;
        this.result.visibility = response.current.visibility;
        this.result.Dialy = [...response.daily];
        this.result.Hourly = [...response.hourly];
        // console.log('hours');
        console.log(this.result.Hourly);
        this.result.temp = response.current.temp;
        this.result.icon = response.current.weather[0].icon;
        this.WweatherApiService.CurrentWeather(this.result);
        this.Complete = false;
        console.log(this.result)
        this.weatherSearchForm.reset();
        console.log("by UserLocation")

      },
      (error: Error) => {
        console.log(error);
      }
    );
  }

  GetWeatherByCity(longitude: number, latitude: number) {
    this.WweatherApiService.GetWeatehrByCityName(longitude, latitude).subscribe(
      (response: any) => {
        this.result.CityName = this.userSearchLocation.formatted_address;
        this.result.sunrise = response.current.sunrise;
        this.result.sunset = response.current.sunset;
        // this.result.sunrise = this.result.sunrise/1000;
        // this.result.sunset = response.current.sunset/1000;
        this.result.Dialy = [...response.daily];
        this.result.Hourly = [...response.hourly];
        this.result.main = response.current.weather[0].main;
        this.result.humidity = response.current.humidity;
        this.result.wind_speed = response.current.wind_speed;
        this.result.pressure = response.current.pressure;
        this.result.feels_like = response.current.feels_like;
        this.result.visibility = response.current.visibility;
        this.result.temp = response.current.temp;
        this.result.icon = response.current.weather[0].icon;
        this.WweatherApiService.CurrentWeather(this.result);
        console.log("by city")
        this.Complete = false;
        this.weatherSearchForm.reset();
      },
      (error: Error) => {
        console.log(error);
      }
    );
  }
}
