import { Component, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-booking-card',
  templateUrl: './student-booking-card.component.html',
  styleUrls: ['./student-booking-card.component.scss']
})
export class StudentBookingCardComponent {
  @ViewChild('exampleModal') exampleModal: any;
  @Input() bookedCourse: any;
  feedbackForm!: FormGroup;
  ratingControl = new FormControl(0)
  rate:any = 0;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.feedbackForm = this.formBuilder.group({
      rating: [0, Validators.required],
      comment: ['', Validators.required]
    });
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

}
