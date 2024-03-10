import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/Guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path:'',
    loadChildren:()=>import('./view/home/home.module').then(m=> m.HomeModule)
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./view/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'tutors',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./view/tutors/tutors.module').then((m) => m.TutorsModule),
  },
  {

    path: 'courses',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./view/courses/courses.module').then((m) => m.CoursesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
