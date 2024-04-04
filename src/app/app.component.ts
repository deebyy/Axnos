import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from './core/services/authentication.service';
import { GenericService } from './core/services/generic.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-stable-v';
  islogin: boolean = false;
  constructor(private toastrService: ToastrService,
              public translate: TranslateService,
              private authService: AuthenticationService,
              private generalSer: GenericService) {
    // this.authService.userToken.subscribe((isLogged) => {

    //   if (isLogged != null) {

    //     this.islogin = true;

    //   } else {

    //     this.islogin = false;
    //   }
    // });
    generalSer.userToken.subscribe(() => {
      if (generalSer.userToken.getValue() != null) {
        this.islogin = true;
      } else {
        this.islogin = false;
      }
    });
  }
ngOnInit(): void {
}

}
