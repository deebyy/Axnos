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
@NgModule({
    declarations: [
        TutorsComponent,
        ProfileComponent
    ],
    imports: [
        CommonModule,
        TutorsRoutingModule,
        NgMultiSelectDropDownModule.forRoot(),
        FormsModule,
        ReactiveFormsModule,
        DropdownModule,
        SharedModule,
        RatingModule.forRoot()
    ]
})
export class TutorsModule { }
