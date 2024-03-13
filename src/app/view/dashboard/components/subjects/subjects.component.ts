import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent {
  subjectForm!: FormGroup;
  @ViewChild('exampleModal') exampleModal: any;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.subjectForm = this.formBuilder.group({
      courseName: ['', Validators.required],
      professorName: ['', Validators.required],
      coursePrice: ['Price/Hour', Validators.required]
    });
  }
  addSubject() {
    if (this.subjectForm.valid) {
      this.subjects.push({
        courseName: this.subjectForm.value.courseName,
        coursePrice: this.subjectForm.value.coursePrice,
        professorName: this.subjectForm.value.professorName
      });
      this.exampleModal.nativeElement.querySelector('.btn-close').click();
      this.subjectForm.reset();
    }
  }
  subjects=[
    {
      courseName:'DataBase',
      coursePrice:'10$',
      professorName:'Youssef Ahmed',
    },
    {
      courseName:'Data Structure',
      coursePrice:'10$',
      professorName:'Ahmed Saeed',
    },
    {
      courseName:'Java',
      coursePrice:'10$',
      professorName:'Ali Hassan',
    }
  ]
}
