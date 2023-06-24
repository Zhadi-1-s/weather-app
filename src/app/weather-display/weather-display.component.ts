import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather-display',
  templateUrl: './weather-display.component.html',
  styleUrls: ['./weather-display.component.css']
})
export class WeatherDisplayComponent implements OnInit {
    searchCity : string = '';

    weather: any;

    correctCity!:string;

    constructor(private weatherService: WeatherService){}

    ngOnInit(): void {
    }

    onSearch(){
      this.correctCity = this.searchCity
      this.searchCity = ''
      this.getWeatherdata()
    }

    getWeatherdata(){
      this.weatherService.getweather(this.correctCity).subscribe((data: any) => {
        this.weather = data 
      })
    }
}
