import { Component } from '@angular/core';
import { TutorService } from 'src/app/core/services/tutor.service';

@Component({
  selector: 'app-dashboard-content',
  templateUrl: './dashboard-content.component.html',
  styleUrls: ['./dashboard-content.component.scss']
})
export class DashboardContentComponent {
  isTutor:boolean = false;
  constructor(private tutorService: TutorService){
    this.tutorService.isTutor$.subscribe(isTutor => {
      this.isTutor = isTutor;
    });
  }
  ngOnInit(): void {

  }
}
