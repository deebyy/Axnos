import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginCredentials } from 'src/app/core/interfaces/user';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import Swal from 'sweetalert2'
declare var google:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  hide = true;
  loginForm!: FormGroup;
  constructor(private fb: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
    this.initGoogleSignInButton();
  }


  login() {
    if (this.loginForm.valid) {
      const credentials: LoginCredentials = {
        emailAddress: this.loginForm.value.email,
        password: this.loginForm.value.password
      };
      console.log("credentials",credentials);
      this.authService.login(credentials);
    }

  }
  private initGoogleSignInButton(): void {
    google.accounts.id.initialize({
      client_id: '154886408036-b375e6fm8v1cu1jmhi6kcp9n5ph0au6b.apps.googleusercontent.com',
      callback: (res: any) => this.authService.loginWithGoogle(res)
    });
    google.accounts.id.renderButton(document.getElementById('login-btn'), {
      size: 'large',
      shape: 'rectangle',
      type: 'standard',
      text: 'Sign in with Google',

    });

  }

  togglePasswordVisibility(): void {
    this.hide = !this.hide;
  }

}
