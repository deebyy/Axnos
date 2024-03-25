import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {


  islogin: boolean = false;

  isLoginActive: boolean = true;

  isSignupActive: boolean = false;

  userid = localStorage.getItem("userId")

  constructor(private authService: AuthenticationService) {

    const storedLoginActive = localStorage.getItem('isLoginActive');

    this.isLoginActive = storedLoginActive === 'true';

    const storedSignupActive = localStorage.getItem('isSignupActive');

    this.isSignupActive = storedSignupActive === 'true';

    // check user is logged or not
    this.authService.userToken.subscribe((isLogged) => {
    //  console.log("isLogged",isLogged);


      if (isLogged != null) {

        this.islogin = true;

      } else {

        this.islogin = false;
      }
    });


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
