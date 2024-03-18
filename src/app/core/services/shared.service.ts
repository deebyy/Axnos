import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject } from '../interfaces/subject';

@Injectable({
  providedIn: 'root'
})
export class SharedService {


  private apiUrl = `${environment.apiUrl}/subjects`;

  constructor(private http: HttpClient) { }

  getSubjects(): Observable<Subject[]> {
    return this.http.get<Subject[]>(this.apiUrl);
  }

  addSubject(subject: Subject): Observable<Subject> {
    return this.http.post<Subject>(this.apiUrl, subject);
  }

  updateSubject(subject: Subject , id): Observable<any> {
    const url = `${this.apiUrl}/${subject.id}`;
    //return this.http.put(url, subject);
    return this.http.put(this.apiUrl + `/${id}`, subject);
  }
  // updateservice(id: any, value: any) {
  //   return this.http.post(this.apiUrl + `services/${id}`, value, { headers: this.headers });
  // }
  getSubjectById(id: number): Observable<Subject> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Subject>(url);
  }
  deleteSubject(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
