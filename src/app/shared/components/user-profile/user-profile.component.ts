import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {
  public  path="assets/images/user/avatar-05.png";
  User: any;
   notifications = [
    {
      username: 'ahmed saeed',
      image: 'assets/images/user/avatar-01.png',
      content: 'This is the content of the first notify.'
    },
    {
      username: 'ali hassan',
      image: 'assets/images/user/avatar-02.png',
      content: 'This is the content of the second notify.'
    },
    {
      username: 'hamada oksha',
      image: 'assets/images/user/avatar-03.png',
      content: 'This is the content of the second notify.'
    },
    {
      username: 'mina saad',
      image: 'assets/images/user/avatar-04.png',
      content: 'This is the content of the second notify.'
    },
    {
      username: 'hassan ahmed',
      image: 'assets/images/user/avatar-05.png',
      content: 'This is the content of the second notify.'
    },

  ];
  constructor(private authService: AuthenticationService){}
  ngOnInit(): void {

    this.authService.user$.subscribe(user => {
      this.User = user;
      console.log("user is ",this.User);
      if(this.User != null || this.User != undefined){
        this.User = {
          firstName: user.firstName || user.given_name,
          lastName: user.lastName || user.family_name,
          email: user.email,
          image: user.picture || this.path
        };
        console.log("user is ",this.User);
      }

    });


  }

  LogOut(){
   this.authService.logout()
  }
}
