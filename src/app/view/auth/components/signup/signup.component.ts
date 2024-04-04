import { GoogleLoginProvider, SocialAuthService } from '@abacritt/angularx-social-login';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupCredentials } from 'src/app/core/interfaces/user';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import jwt_decode from 'jwt-decode';
declare var google:any;
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  auth2: any;
  hide = true;
  registrationForm!: FormGroup;
  user:any;
  loggedIn:any;
  constructor( private fb: FormBuilder,
               private http: HttpClient ,
               private router:Router,
               private socialAuthService: SocialAuthService,
               private authService :AuthenticationService ){

}
  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).{8,}$/)]]

    });

    this.initGoogleSignInButton();
  }

  submitForm() {
    if (this.registrationForm.valid) {
      const credentials: SignupCredentials = {
        emailAddress: this.registrationForm.value.email,
        firstName: this.registrationForm.value.firstName,
        lastName: this.registrationForm.value.lastName,
        password: this.registrationForm.value.password
      };
      console.log("credentials",credentials);

      this.authService.signup(credentials);
    }
  }
  togglePasswordVisibility(): void {
    this.hide = !this.hide;
  }

private initGoogleSignInButton(): void {
  google.accounts.id.initialize({
    client_id: '154886408036-b375e6fm8v1cu1jmhi6kcp9n5ph0au6b.apps.googleusercontent.com',
    callback: (res: any) => this.authService.loginWithGoogle(res)
  });
  google.accounts.id.renderButton(document.getElementById('google-btn'), {
    size: 'large',
    shape: 'rectangle',
    type: 'standard',
    text: 'Sign in with Google',

  });

}

logOut(): void {
  this.socialAuthService.signOut();
}



}
