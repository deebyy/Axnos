import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CountryInfo, Faculty, University } from '../interfaces/models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url: string = environment.baseUrl;
  constructor(private _HttpClient: HttpClient ) { }
   getCurrency(){
    const apiURl = "https://openexchangerates.org/api/currencies.json?prettyprint=false&show_alternative=false&show_inactive=false"
    return this._HttpClient.get<any>(`${apiURl}`);
  }
  /* user */
  getprofile() {
    return this._HttpClient.get(this.url + '/Auth/GetProfileInformation');
  }

   /* Countries */
   getAllCountries() {
    return this._HttpClient.get<CountryInfo[]>(this.url + '/Country');
  }

  /* Universities */
  getAllUniversities() {
    return this._HttpClient.get<University[]>(this.url + '/Universities');
  }
  getUniversityByCountryID(CountryID:any) {
    return this._HttpClient.get<University[]>(this.url + `/Universities/${CountryID}`);
  }

 /* Faculties */
  getFaculityByUnivesityID(universityID:any) {
    return this._HttpClient.get<Faculty[]>(this.url + `/Faculty/${universityID}`);
  }


}
