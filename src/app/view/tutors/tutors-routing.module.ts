import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TutorsComponent } from './tutors.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  {path:'', component:TutorsComponent},
  {path:'profile', component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TutorsRoutingModule { }
