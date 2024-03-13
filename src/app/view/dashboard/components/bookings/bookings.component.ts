import { Component } from '@angular/core';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss']
})
export class BookingsComponent {
  courses = [
    {
      image: 'assets/images/courses/tutor1.png',
      tutor:'Mohamed Hassan',
      country:'Egypt',
      university:'Mansoura University',
      faculity:'Computer Science',
      coursesNumber:'3 courses',
      students:'15 Student',
      rate:5,
      reviewers:'13',
      courseName:'DataBase',
      coursePrice:'10$/Hour',
      professorName:'Youssef Ahmed',
      professorLanguages:'EN,AR',
      date:'2024-02-28',
      from:'13:00',
      to:'14:00'
    },
    {
      image: 'assets/images/courses/tutor2.png',
      tutor:'Mohamed Hassan',
      country:'Egypt',
      university:'Mansoura University',
      faculity:'Computer Science',
      coursesNumber:'3 courses',
      students:'15 Student',
      rate:5,
      reviewers:'13',
      courseName:'DataBase',
      coursePrice:'10$/Hour',
      professorName:'Youssef Ahmed',
      professorLanguages:'EN,AR',
      date:'2024-06-28',
      from:'13:00',
      to:'14:00'
    },
    {
      image: 'assets/images/courses/tutor3.png',
      tutor:'Mohamed Hassan',
      country:'Egypt',
      university:'Mansoura University',
      faculity:'Computer Science',
      coursesNumber:'3 courses',
      students:'15 Student',
      rate:5,
      reviewers:'13',
      courseName:'DataBase',
      coursePrice:'10$/Hour',
      professorName:'Youssef Ahmed',
      professorLanguages:'EN,AR',
      date:'2024-12-28',
      from:'13:00',
      to:'14:00'
    },
  ];
}
