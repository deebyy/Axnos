import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient ) { }
   getCurrency(){
    const apiURl = "https://openexchangerates.org/api/currencies.json?prettyprint=false&show_alternative=false&show_inactive=false"
    return this.http.get<any>(`${apiURl}`);
  }
}
