import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SidbarComponent } from './components/sidbar/sidbar.component';
import { BookingsComponent } from './components/bookings/bookings.component';
import { DashboardContentComponent } from './components/dashboard-content/dashboard-content.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { SubjectsComponent } from './components/subjects/subjects.component';
import { CalendersComponent } from './components/calenders/calenders.component';
import { TutorInvoceComponent } from './components/tutor-invoce/tutor-invoce.component';


@NgModule({
  declarations: [
    DashboardComponent,
    SidbarComponent,
    BookingsComponent,
    DashboardContentComponent,
    InvoiceComponent,
    SubjectsComponent,
    CalendersComponent,
    TutorInvoceComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
