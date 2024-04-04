import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { LoginCredentials, SignupCredentials, User } from '../interfaces/user';
import Swal from 'sweetalert2';
import { GenericService } from './generic.service';
import jwt_decode from 'jwt-decode';
import * as CryptoJS from 'crypto-js';
@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  userSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public user$ = this.userSubject.asObservable();
  userToken = new BehaviorSubject(null);
  public userID = localStorage.getItem('userToken');
  payload = JSON.parse(localStorage.getItem('payload') || '{}');

  public randomKey: string = CryptoJS.lib.WordArray.random(16);
  public secretKey: string = CryptoJS.enc.Hex.stringify(this.randomKey);
  isLoggedIn = false;
  url: string = environment.baseUrl;

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private tostar: ToastrService,
    private generalSer: GenericService
  ) {

    this.generalSer.savecurrentuser();

    if ( localStorage.getItem('userToken') != null && localStorage.getItem('authMethod') === 'google') {
      this.userSubject.next(this.payload);
      this.generalSer.savecurrentuser();
    }

  }

  login(credentials: LoginCredentials): void {
    this.http.post(this.url + '/auth/login', credentials).subscribe({
      next: (res: any) => {
        console.log(res);
        Swal.fire({
          title: 'Success!',
          text: 'You logged in successfully',
          icon: 'success',
        }).then(() => {
          localStorage.setItem('userToken', res.token);
          this.generalSer.savecurrentuser();
          this.userSubject.next(res);
          const returnUrl =
            this.route.snapshot.queryParams['returnUrl'] || '/';
          this.router.navigateByUrl(returnUrl);
        });
      },
      error: (errors) => {
        Swal.fire({
          icon: 'error',
          title: 'Sorry...',
          text: errors.error,
        });
        console.error('Error occurred while submitting form:', errors);
      },
    });
  }


  signup(credentials: SignupCredentials): void {
    this.http
      .post(this.url + '/Auth/register', credentials)
      .subscribe({
        next: (res: any) => {
          console.log(res);
          Swal.fire({
            title: 'Success!',
            text: 'You have successfully signed up',
            icon: 'success',
          }).then(() => {
            localStorage.setItem('userToken', res.token);
            this.generalSer.savecurrentuser();
            this.userSubject.next(res);
            this.router.navigate(['/']);
          });
        },
        error: (errors) => {
          Swal.fire({
            icon: 'error',
            title: 'Sorry...',
            text: errors.error,
          }).then(() => {

            this.router.navigate(['/auth/Login']);
          });;

          console.error('Error occurred while submitting signup form:', errors);
        },
      });
  }

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (Error) {
      return null;
    }
  }
  loginWithGoogle(response: any): void {
    if (response) {
      const payload2 = this.getDecodedAccessToken(response.credential);
      localStorage.setItem('payload', JSON.stringify(payload2));
      console.log('payload', JSON.stringify(payload2));

      const token = response.credential;
      const encryptedToken = CryptoJS.AES.encrypt(
        token,
        this.secretKey
      ).toString();

      localStorage.setItem('userToken', encryptedToken);
      localStorage.setItem('authMethod', 'google');
      this.userToken.next(token);
      this.userSubject.next(payload2);
      const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
      this.router.navigateByUrl(returnUrl);
    }
  }
  logout(): void {
    window.location.reload();
    localStorage.removeItem('userToken');
    localStorage.removeItem('isTutor');
    localStorage.removeItem('payload');
    localStorage.removeItem('authMethod');
    localStorage.setItem('isLoginActive', JSON.stringify(true));
    localStorage.setItem('isSignupActive', JSON.stringify(false));
    this.userToken.next(null);
  }

  decryptedPayload(paylaod: any) {
    const bytes = CryptoJS.AES.decrypt(
      paylaod,
      localStorage.getItem('secretKey')
    );
    const decryptedDataString = bytes.toString(CryptoJS.enc.Utf8);
    const decryptedData = JSON.parse(decryptedDataString);
    console.log(decryptedData);
  }

  isAuthenticated() {
    let token: any = localStorage.getItem('userToken');
    if (
      localStorage.getItem('userToken') != null &&
      localStorage.getItem('userToken') != ''
    ) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }

    return this.isLoggedIn;
  }
}


