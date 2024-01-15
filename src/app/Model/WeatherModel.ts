class WeatherModel {
  feels_like: number;
  humidity: number;
  precipitation:number;
  pressure: number;
  sunrise: bigint;
  sunset: bigint;
  temp: number;
  visibility: number;
  weather: {
    description: string;
    icon:string;
    id: number;
    main: string;
  };
  wind_deg: number;
  wind_speed: number;
  timezone: string;

}