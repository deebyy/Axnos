import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import {
  TranslateLoader,
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core';
import { UserProfileComponent } from './components/user-profile/user-profile.component';


@NgModule({
  declarations: [
    NavbarComponent,
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    TranslateModule,
  ],
  exports:[
    NavbarComponent,
    UserProfileComponent
  ]
})
export class SharedModule { }
