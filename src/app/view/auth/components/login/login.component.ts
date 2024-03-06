import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  hide = true;
  submitForm() {
    console.log('Form submitted!');
  }
  togglePasswordVisibility(): void {
    this.hide = !this.hide;
  }

}
