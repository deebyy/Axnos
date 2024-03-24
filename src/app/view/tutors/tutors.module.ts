import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TutorsRoutingModule } from './tutors-routing.module';
import { TutorsComponent } from './tutors.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RatingModule } from 'ngx-bootstrap/rating';
import { SharedModule } from "../../shared/shared.module";
import { DropdownModule } from 'primeng/dropdown';
import { ProfileComponent } from './components/profile/profile.component';
import { BookingSubjectComponent } from './components/booking-subject/booking-subject.component';
import { CalendarModule } from 'primeng/calendar';
import { DatePipe } from '@angular/common';
import { HomeModule } from '../home/home.module';
@NgModule({
    declarations: [
        TutorsComponent,
        ProfileComponent,
        BookingSubjectComponent
    ],
    imports: [
        CommonModule,
        TutorsRoutingModule,
        NgMultiSelectDropDownModule.forRoot(),
        FormsModule,
        ReactiveFormsModule,
        DropdownModule,
        SharedModule,
        RatingModule.forRoot(),
        CalendarModule,
        HomeModule

    ],
    providers: [
      DatePipe
    ]
})
export class TutorsModule { }
