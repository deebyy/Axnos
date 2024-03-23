import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CourcesService {
  private apiUrl = `${environment.apiUrl}/courses`;
  constructor(private http: HttpClient) {}

  getAllCourses(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addCourse(course: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, course);
  }

  // updateCourse2(id: number, course: any): Observable<any> {
  //   return this.http.put<any>(`${this.apiUrl}/${id}`, course);
  // }
  updateCourse(course: any): Observable<any> {
    const courseId = course.id;
    return this.http.put<any>(`${this.apiUrl}/${courseId}`, course);
  }

  deleteCourse(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
  updateCourseStatus(courseId: number, updateData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${courseId}`, updateData);
  }

}
