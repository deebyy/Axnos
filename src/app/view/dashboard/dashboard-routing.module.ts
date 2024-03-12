import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingsComponent } from './components/bookings/bookings.component';
import { DashboardComponent } from './dashboard.component';
import { DashboardContentComponent } from './components/dashboard-content/dashboard-content.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { SubjectsComponent } from './components/subjects/subjects.component';
import { CalendersComponent } from './components/calenders/calenders.component';
import { TutorInvoceComponent } from './components/tutor-invoce/tutor-invoce.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'dash', pathMatch: 'full' },
      { path: 'dash', component: DashboardContentComponent },
      { path: 'bookings', component: BookingsComponent },
      { path: 'invoice', component: InvoiceComponent },
      { path: 'tutor-invoice', component: TutorInvoceComponent },
      { path: 'calenders', component: CalendersComponent },
      { path: 'subjects', component: SubjectsComponent }

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
