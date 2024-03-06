import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  isLogged:boolean = false;
  isLoginActive: boolean = true;
  isSignupActive: boolean = false;
  constructor() {
    const storedLoginActive = localStorage.getItem('isLoginActive');
    this.isLoginActive = storedLoginActive === 'true';
    const storedSignupActive = localStorage.getItem('isSignupActive');
    this.isSignupActive = storedSignupActive === 'true';
  }

  ngOnInit(): void {
  }
  toggleActiveButton(button: string) {
    if (button === 'login') {
      this.isLoginActive = true;
      this.isSignupActive = false;
      localStorage.setItem('isLoginActive', JSON.stringify(true));
      localStorage.setItem('isSignupActive', JSON.stringify(false));
    } else if (button === 'signup') {
      this.isLoginActive = false;
      this.isSignupActive = true;
      localStorage.setItem('isLoginActive', JSON.stringify(false));
      localStorage.setItem('isSignupActive', JSON.stringify(true));
    }
  }

}
