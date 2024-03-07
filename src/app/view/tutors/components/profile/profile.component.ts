import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
subjects=[
  {
    courseName:'DataBase',
    coursePrice:'10$/Hour',
    professorName:'Youssef Ahmed',
  },
  {
    courseName:'DataBase',
    coursePrice:'10$/Hour',
    professorName:'Ahmed Saeed',
  },
  {
    courseName:'DataBase',
    coursePrice:'10$/Hour',
    professorName:'Ali Hassan',
  }
]
}
