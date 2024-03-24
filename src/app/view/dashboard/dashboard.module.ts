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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { HomeModule } from '../home/home.module';


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
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    SharedModule,
    HomeModule,
    NgCircleProgressModule.forRoot({
      "backgroundPadding": 7,
      "radius": 0,
      "space": -2,
      "outerStrokeColor": "#808080",
      "innerStrokeColor": "#e7e8ea",
      "innerStrokeWidth": 2,
      showTitle:true,
      maxPercent:100,
      outerStrokeWidth:100,
      percent:100,
      showSubtitle:false,
      "titleFormat": (percent: number) => `${percent}%`,
      "titleFontSize": '12',
      "subtitleFontSize": '20',
      "animateTitle": false,
      "animationDuration": 1000,
      "showUnits": false,
      "clockwise": false}),
      NgxIntlTelInputModule
  ]
})
export class DashboardModule { }
