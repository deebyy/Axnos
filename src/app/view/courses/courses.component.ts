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
  selectedCountry:any
  selectedUniversity:any;
  selectedFaculity:any


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
    this.myForm = this.fb.group({
      subject: new FormControl(),
      country: new FormControl(),
      university: new FormControl(),
      faculity: new FormControl(),
    });
  }

  ngOnInit() {

        this.Countries = [
          { name: 'New York', code: 'NY' },
          { name: 'Rome', code: 'RM' },
          { name: 'London', code: 'LDN' },
          { name: 'Istanbul', code: 'IST' },
          { name: 'Paris', code: 'PRS' }
        ];
      this.Universites = [
          { item_id: 1, name: 'Harvard ' },
          { item_id: 2, name: 'Stanford  ' },
          { item_id: 3, name: 'Princeton  ' },
          { item_id: 4, name: 'assuit ' },
          { item_id: 5, name: 'Columbia ' },
          { item_id: 6, name: 'Tokyo' }
          ];
      this.Faculites = [
          { Fname: 'Arts' },
          { Fname: 'Science' },
          { Fname: 'Engineering' },
          { Fname: 'Medicine' },
          { Fname: 'Law' },
          { Fname: 'Education' }
          ];


  }


  onFormSubmit(): void {
    console.log('Form values:', this.myForm.value);
  }


}



