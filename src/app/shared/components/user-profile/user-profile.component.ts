import { Component } from '@angular/core';
import { UserProfile } from 'src/app/core/interfaces/user';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { GenericService } from 'src/app/core/services/generic.service';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {
  public  path="assets/images/user/avatar-05.png";
 // User: any;
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
  User: UserProfile = {
    firstName: '',
    lastName: '',
    email: '',
    universityId: null,
    countryId: null,
    facultyId: null,
    phoneNumber: null,
    gender: null,
    dateOfBirth: null,
    languages: null,
    currency: null,
    bio: null,
    image: null
  };
  constructor(private authService: AuthenticationService ,  private _GeneralService: GenericService , private apiSer:ApiService){}
  ngOnInit(): void {
    this.apiSer.getprofile().subscribe((res:any)=>{

      this.User = {
        firstName: res.firstName || res.given_name,
        lastName: res.lastName || res.family_name,
        email: res.email || '',
        universityId: res.universityId || null,
        countryId: res.countryId || null,
        facultyId: res.facultyId || null,
        phoneNumber: res.phoneNumber || null,
        gender: res.gender || null,
        dateOfBirth: res.dateOfBirth || null,
        languages: res.languages || null,
        currency: res.currency || null,
        bio: res.bio || null,
        image: res.image || this.path
      };
      // this.User = {
      //   firstName: res.firstName || res.given_name,
      //   lastName: res.lastName || res.family_name,
      //   email: res.emailAddress,
      //   image: res.image || this.path
      // };
    })
    // this.authService.user$.subscribe(user => {
    //   console.log("new user data", user);

    //   this.User = user;
    //   if(this.User != null || this.User != undefined){
    //     this.User = {
    //       firstName: user.firstName || user.given_name,
    //       lastName: user.lastName || user.family_name,
    //       email: user.emailAddress,
    //       image: user.picture || this.path
    //     };
    //   }
    //   console.log("user is ",this.User);

    // });


  }

  LogOut(){
   this.authService.logout()
  }
}
