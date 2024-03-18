import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TutorsComponent } from './tutors.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BookingSubjectComponent } from './components/booking-subject/booking-subject.component';

const routes: Routes = [
  {path:'', component:TutorsComponent},
  {path:'profile', component:ProfileComponent},
  {path:'book-subject', component:BookingSubjectComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TutorsRoutingModule { }
