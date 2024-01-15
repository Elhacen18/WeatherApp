import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { SevenDaysForecastComponent } from './seven-days-forecast/seven-days-forecast.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { MatToolbarModule } from '@angular/material/toolbar';
import { WeatherApiService } from './Service/weather-api.service';
import {MatDividerModule} from '@angular/material/divider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { HoursForcastComponent } from './hours-forcast/hours-forcast.component';




@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CurrentWeatherComponent,
    SevenDaysForecastComponent,
    HoursForcastComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatProgressBarModule,
    ReactiveFormsModule,
    HttpClientModule,
    GooglePlaceModule,
    MatDividerModule,
    MatSlideToggleModule
  ],
  providers: [WeatherApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
