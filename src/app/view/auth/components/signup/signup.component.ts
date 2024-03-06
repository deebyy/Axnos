import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  hide = true;
  submitForm() {
    console.log('Form submitted!');
  }
  togglePasswordVisibility(): void {
    this.hide = !this.hide;
  }

}
