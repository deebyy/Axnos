import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DropdownFilterOptions } from 'primeng/dropdown';
interface City {
  name: string;
  code: string;
}
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {

  myForm!:FormGroup;
  disabled = false;
  ShowFilter = false;
  limitSelection = false;
  Countries: any = [];
  Universites: any = [];
  Faculites: any = [];
  Subjects: any = [];
  universities2: any = [];
  selectedItems: any = [];
  dropdownSettings: any = {};
  rate: any =4.5;
  body: any;
  cities: City[] | undefined;
  selectedCity: City | undefined;
  isReadonly = true;



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

    },
    {
      image: 'assets/images/courses/tutor4.png',
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

    },
    {
      image: 'assets/images/courses/tutor5.png',
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

    },
    {
      image: 'assets/images/courses/tutor6.png',
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

    },
    {
      image: 'assets/images/courses/tutor7.png',
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

    },
    {
      image: 'assets/images/courses/tutor8.png',
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

    },
    {
      image: 'assets/images/courses/tutor9.png',
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

    },

  ];
  constructor(private fb: FormBuilder) {
    this.myForm = new FormGroup({
      Subject: new FormControl(),
      University: new FormControl(),
      Faculity: new FormControl(),
      Country: new FormControl(),
    });
  }

  ngOnInit() {

      this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
        ];
      this.Countries = [
          { item_id: 1, item_text: 'Afghanistan' },
          { item_id: 2, item_text: 'Angola' },
          { item_id: 3, item_text: 'Australia' },
          { item_id: 4, item_text: 'Bahrain' },
          { item_id: 5, item_text: 'Chennai' },
          { item_id: 6, item_text: 'Algeria' }
        ];
      this.Universites = [
        { item_id: 1, item_text: 'Harvard ' },
        { item_id: 2, item_text: 'Stanford  ' },
        { item_id: 3, item_text: 'Princeton  ' },
        { item_id: 4, item_text: 'assuit ' },
        { item_id: 5, item_text: 'Columbia ' },
        { item_id: 6, item_text: 'Tokyo' }
        ];
      this.Faculites = [
      { item_id: 1, item_text: 'Arts' },
      { item_id: 2, item_text: 'Science' },
      { item_id: 3, item_text: 'Engineering' },
      { item_id: 4, item_text: 'Medicine' },
      { item_id: 5, item_text: 'Law' },
      { item_id: 6, item_text: 'Education' }
        ];
      this.Subjects = [
      { item_id: 1, item_text: 'Mathematics' },
      { item_id: 2, item_text: 'History' },
      { item_id: 3, item_text: 'Biology' },
      { item_id: 4, item_text: 'Physics' },
      { item_id: 5, item_text: 'Computer Science' },
      { item_id: 6, item_text: 'Philosophy' }
        ];
      this.dropdownSettings = {
          singleSelection: false,
          idField: 'item_id',
           allowSearchFilter: true,
          textField: 'item_text',
          selectAllText: 'Select All',
          unSelectAllText: 'UnSelect All',
          itemsShowLimit: 3,

      };

  }
  handleUniversitySelection(selection: any[]) {
    console.log("selection",selection);

  }

  onFormSubmit(): void {
    console.log('Form values:', this.myForm.value);
  }


}



