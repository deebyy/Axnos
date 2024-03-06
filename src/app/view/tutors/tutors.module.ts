import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TutorsRoutingModule } from './tutors-routing.module';
import { TutorsComponent } from './tutors.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RatingModule } from 'ngx-bootstrap/rating';
import { SharedModule } from "../../shared/shared.module";
import { DropdownModule } from 'primeng/dropdown';
@NgModule({
    declarations: [
        TutorsComponent
    ],
    imports: [
        CommonModule,
        TutorsRoutingModule,
        NgMultiSelectDropDownModule.forRoot(),
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        DropdownModule
    ]
})
export class TutorsModule { }
