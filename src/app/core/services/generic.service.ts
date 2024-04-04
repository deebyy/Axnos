import { environment } from 'src/environments/environment';

import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, map, retry, throwError } from 'rxjs';
import { ApiresonseVM } from '../interfaces/apiresonsevm';

@Injectable({
  providedIn: 'root'
})
export class GenericService {
  headers:any;
  userToken = new BehaviorSubject(null);
  token: any;
  url: string = environment.baseUrl;
  
  constructor(private _http:HttpClient) {
    this.token = localStorage.getItem('userToken') || '';
    if (localStorage.getItem('userToken') != null) {
      this.savecurrentuser();
    }
  }
  savecurrentuser() {
    let token: any = localStorage.getItem('userToken');
    this.userToken.next(token);
  }


 

















  // Handle request
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  // Get All Data Of Apis
  getAll(apiRoute:string):Observable<ApiresonseVM>{
    return this._http.get<ApiresonseVM>(`${environment.apiUrl}${apiRoute}`)
    .pipe(
      retry(3),
      catchError(this.handleError)
    )
  }
  // Get Data By Id
  getById(id:any,apiRoute:string):Observable<ApiresonseVM>{
    return this._http.get<ApiresonseVM>(`${environment.apiUrl}${apiRoute}/${id}`,)
    .pipe(
      retry(3),
      catchError(this.handleError)
    )
  }
  getByIdYear(id:number,apiRoute:string,year:any):Observable<ApiresonseVM>{
    return this._http.get<ApiresonseVM>(`${environment.apiUrl}${apiRoute}/${id}/${year}`,)
    .pipe(
      retry(3),
      catchError(this.handleError)
    )
  }
  // Get Data By Id
  getByIdQ(apiRoute:string):Observable<ApiresonseVM>{
    return this._http.get<ApiresonseVM>(`${environment.apiUrl}${apiRoute}`,)
    .pipe(
      retry(3),
      catchError(this.handleError)
    )
  }

  // Add Data To Api
  post(newObject:any,apiRoute:string):Observable<ApiresonseVM>{
    return this._http.post<ApiresonseVM>(`${environment.apiUrl}${apiRoute}` , newObject,)
    .pipe(
      retry(3),
      catchError(this.handleError)
    )
  }

  // Update Data By Id
  put(newObject:any,apiRoute:string):Observable<ApiresonseVM>{
    return this._http.put<ApiresonseVM>(`${environment.apiUrl}${apiRoute}` , newObject,)
    .pipe(
      retry(3),
      catchError(this.handleError)
    )
  }

  // Delete Data From Api By Id
  delete(id:number,apiRoute:string):Observable<ApiresonseVM>{
    return this._http.delete<ApiresonseVM>(`${environment.apiUrl}${apiRoute}/${id}`,)
    .pipe(
      retry(3),
      catchError(this.handleError)
    )
  }


  // Delete file From Api By Id
  deleteFileByName(apiRoute:string):Observable<ApiresonseVM>{
    return this._http.delete<ApiresonseVM>(`${environment.apiUrl}${apiRoute}`,)
    .pipe(
      retry(3),
      catchError(this.handleError)
    )
  }


}
