import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user';


@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<any>;
    public currentUser: Observable<User>;
    public token:any
    constructor(private http: HttpClient , private router:Router , private tostar:ToastrService) {
        this.currentUserSubject = new BehaviorSubject<any>(sessionStorage.getItem('currentUser'));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        //return this.currentUserSubject.value;
        return JSON.parse(sessionStorage.getItem("currentUser") || '{}');
    }





}
