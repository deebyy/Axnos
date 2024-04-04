import { Component, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CourcesService } from 'src/app/core/services/cources.service';

@Component({
  selector: 'app-student-booking-card',
  templateUrl: './student-booking-card.component.html',
  styleUrls: ['./student-booking-card.component.scss']
})
export class StudentBookingCardComponent {
  @ViewChild('exampleModal') exampleModal: any;
  @ViewChild('exampleModal2') exampleModal2: any;
  @Input() bookedCourse: any;
  @Input() index!: number;
  feedbackForm!: FormGroup;
  ratingControl = new FormControl(0)
  rate: any = 0;
  requestRefundSended: boolean = false
  refundForm!: FormGroup;
 // courses!: any[];
  selectedCourseId!: number;
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
  constructor(private formBuilder: FormBuilder, private courceSer: CourcesService) { }

  ngOnInit(): void {
    this.feedbackForm = this.formBuilder.group({
      rating: [0, Validators.required],
      comment: ['', Validators.required]
    });
    this.refundForm = this.formBuilder.group({
      reason: ['', Validators.required],
      details: ['', Validators.required]
    });
   // this.getCourses();
  }
  getCourses(): void {
    this.courceSer.getAllCourses()
      .subscribe(courses => this.courses = courses);
  }
  onSubmit() {
    if (this.feedbackForm.valid) {
      console.log(this.feedbackForm.value);
      this.exampleModal.nativeElement.querySelector('.cancel-btn').click();

    } else {
      console.log("form not valid");
    }
  }

  isSessionInPast(date: string, from: string): boolean {
    const sessionDateTime = new Date(date + 'T' + from);
    return sessionDateTime < new Date();
  }

  isSessionInFuture(date: string, from: string): boolean {
    const sessionDateTime = new Date(date + 'T' + from);
    return sessionDateTime > new Date();
  }


  isRefundAllowed(date: string): boolean {
    const sessionDateTime = new Date(date);
    const today = new Date();
    const daysDifference = Math.floor((today.getTime() - sessionDateTime.getTime()) / (1000 * 60 * 60 * 24));
    return (daysDifference <= 30 || daysDifference > 30) && sessionDateTime <= today;
  }
  isDateMoreThan30DaysAgo(date: string): boolean {
    const today = new Date();
    const courseDate = new Date(date);
    const differenceInDays = Math.floor((today.getTime() - courseDate.getTime()) / (1000 * 60 * 60 * 24));
    return differenceInDays > 30;
  }

  setSelectedCourseId(id: number,) {
    this.selectedCourseId = id;
    console.log("id", id);
    console.log("selectedCourseId", this.selectedCourseId);
  }

  SubmitRequestRefund(id: number) {
    if (this.refundForm.valid) {
      this.courceSer.updateCourseStatus(id, { status: 'active' }).subscribe({
        next: (res: any) => {
          const updatedCourseIndex = this.courses.findIndex(course => course.id === id);
          if (updatedCourseIndex !== -1) {
            this.courses[updatedCourseIndex].status = 'active';
            this.courceSer.updateCourse(this.courses[updatedCourseIndex]).subscribe({
              next: (updatedCourse: any) => {
                console.log('Course updated successfully:', updatedCourse);
              },
              error: (error) => {
                console.error('Error updating course:', error);
              }
            });
          }
          this.refundForm.reset();
          this.refundForm.get('reason')?.setValue('');
          this.exampleModal2.nativeElement.querySelector('.btn-close').click();
        },
        error: (error) => {
          console.error('Error updating course status:', error);
        }
      });
    } else {
      console.log('Form not valid');
    }
  }




}
