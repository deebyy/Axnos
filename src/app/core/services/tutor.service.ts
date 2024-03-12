import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TutorService {
  private isTutorSubject = new BehaviorSubject<boolean>(this.getInitialIsTutorValue());
  isTutor$ = this.isTutorSubject.asObservable();

  constructor() { }

  private getInitialIsTutorValue(): boolean {
    const isTutorValue = localStorage.getItem('isTutor');
    return isTutorValue !== null ? true : false;
  }

  setIsTutor(value: any) {
    this.isTutorSubject.next(value);
    localStorage.setItem("isTutor", value);
  }

}
