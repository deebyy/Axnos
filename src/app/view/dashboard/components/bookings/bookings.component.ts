import { Component } from '@angular/core';
import { CourcesService } from 'src/app/core/services/cources.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss']
})
export class BookingsComponent {
//  courses!: any[];
  constructor(private courseService: CourcesService) {}

  ngOnInit(): void {
   // this.getCourses();
  }
  // getCourses(): void {
  //   this.courseService.getAllCourses()
  //     .subscribe(courses => this.courses = courses);
  // }


  courses = [
    {
      id: 1,
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
      to:'14:00',
      isRefunded:false,
      status:'pending'
    },
    {
      id: 2,
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
      date:'2024-01-28',
      from:'13:00',
      to:'14:00',
      isRefunded:false,
      status:'pending'
    },
    {
      id: 3,
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
      date:'2024-3-2',
      from:'13:00',
      to:'14:00',
      isRefunded:false,
      status:'pending'
    },
  ];

}
