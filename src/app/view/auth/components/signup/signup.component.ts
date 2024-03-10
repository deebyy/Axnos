import { GoogleLoginProvider, SocialAuthService } from '@abacritt/angularx-social-login';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  hide = true;
  registrationForm!: FormGroup;
  constructor(private fb: FormBuilder, private http: HttpClient , private router:Router,  private socialAuthService: SocialAuthService,){
}
  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

  }
  submitForm() {
    console.log( this.registrationForm.value);

    if (this.registrationForm.valid) {
      this.http.post('http://localhost:3000/SignupUsers', this.registrationForm.value).subscribe(response => {
        console.log('Form submitted successfully!', response);
        alert("Form submitted successfully!")
        this.router.navigate(['/auth/Login']);
        this.registrationForm.reset();
      }, error => {
        console.error('Error occurred while submitting form:', error);
      });
    }
  }
  togglePasswordVisibility(): void {
    this.hide = !this.hide;
  }

  loginWithGoogle() {

    this.socialAuthService
    .signIn(GoogleLoginProvider.PROVIDER_ID)
    .then((res) => {
     console.log(res);

      let authObj = {
         name: res.name,
         social_id: res.id,
         email: res.email
      };
      console.log(authObj);
      // this._ClientAuthService.AuthLogin(authObj).subscribe((res: any) => {
      //   console.log(res);

      //   if (res.status == true) {

      //     this._Router.navigate(['/activate-account-email'])

      //   } else {

      //     this.phoneActive = res.message.phone;
      //     console.log( this.phoneActive );
      //   }


      // });


    });
  // }
}

}
