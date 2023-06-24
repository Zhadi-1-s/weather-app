import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getweather(nameOfCity: string){
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${nameOfCity}&appid=86daa212ab97fea7fc1b4385ffd96cf3&units=metric`
    return this.http.get(apiUrl)
  }
}
