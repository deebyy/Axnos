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
import { TutorCardComponent } from './components/tutor-card/tutor-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RatingModule } from 'ngx-bootstrap/rating';
import { CustomMultiselectComponent } from './components/custom-multiselect/custom-multiselect.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { CourseCardComponent } from './components/course-card/course-card.component';

@NgModule({
  declarations: [
    NavbarComponent,
    UserProfileComponent,
    TutorCardComponent,
    CustomMultiselectComponent,
    CourseCardComponent,

  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    TranslateModule,
    RatingModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot(),
  ],
  exports:[
    NavbarComponent,
    UserProfileComponent,
    TutorCardComponent,
    CustomMultiselectComponent,
    CourseCardComponent
  ]
})
export class SharedModule { }
