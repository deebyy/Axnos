import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { CalendersComponent } from './services/dashboard/components/calenders/calenders.component';
import { SubjectsComponent } from './services/dashboard/components/subjects/subjects.component';


@NgModule({
  declarations: [
    CalendersComponent,
    SubjectsComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ]
})
export class CoreModule { }
