import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user';
import Swal from 'sweetalert2'

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
   userSubject :BehaviorSubject<any> = new BehaviorSubject<any>(null);
   public user$ = this.userSubject.asObservable();
   userToken = new BehaviorSubject(null);
    public token:any
    public userID = localStorage.getItem("userId")

    constructor(private http: HttpClient , private router:Router ,
      private route: ActivatedRoute, private tostar:ToastrService) {

      if (localStorage.getItem('userId') != null) {
        this.getUserById(this.userID).subscribe(user => {
          if (user) {
            this.userSubject.next(user);
          }
        });
        this.savecurrentuserID();
      }
  
    }
    savecurrentuserID() {
      let id: any = localStorage.getItem('userId');
      this.userToken.next(id);
    }
 
    login(email: string, password: string): void {
      let id = localStorage.getItem("userId")
     if(!id)
      this.http.get<any>(`${environment.apiUrl}/SignupUsers`).subscribe({
        
        next: (res) => {
          
          const user = res.find((a: any) => {
            return a.email === email && a.password === password;
          });
          if (user) {
           
            Swal.fire({
              title: "Good job!",
              text: "You logged in successfully",
              icon: "success"
            }).then(() => {
              let uID = user.id;
              this.userSubject.next(user);
              this.userToken.next(uID);
              localStorage.setItem("userId", uID);
              const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
              this.router.navigateByUrl(returnUrl);
            });
          } else {
            Swal.fire({
              icon: "error",
              title: "Sorry...",
              text: "Please make sure the data is correct",

            });
          }
        },
        error: (error) => {
          
          console.error('Error occurred while submitting form:', error);
        }
      });
    }

    logout(): void {
      window.location.reload()
      localStorage.removeItem('userId');
      localStorage.setItem('isLoginActive', JSON.stringify(true));
      localStorage.setItem('isSignupActive', JSON.stringify(false));
      this.userToken.next(null); 
      const currentUrl = this.router.url;
      if (currentUrl.startsWith('/courses') || currentUrl.startsWith('/tutors')  ) {
        this.router.navigate(['/auth/Login']);
      }
    }
  private getUserById(userId: any): Observable<any> {
      return this.http.get<User>(`${environment.apiUrl}/SignupUsers/${userId}`);
    }
  
}
