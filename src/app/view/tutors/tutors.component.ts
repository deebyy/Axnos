import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
interface City {
  name: string;
  code: string;
}
@Component({
  selector: 'app-tutors',
  templateUrl: './tutors.component.html',
  styleUrls: ['./tutors.component.scss']
})
export class TutorsComponent {

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


  tutors=[
    {
      image: 'assets/images/tutors/tutor1.png',
      tutor:'Mohamed Hassan',
      country:'Egypt',
      university:'Mansoura University',
      faculity:'Computer Science',
      coursesNumber:'3 courses',
      students:'15 Student',
      rate:5,
      reviewers:'13',
      tutorLanguages:'EN,AR',
    },
    {
      image: 'assets/images/tutors/tutor2.png',
      tutor:'tutor name',
      country:'Egypt',
      university:'Mansoura University',
      faculity:'Computer Science',
      coursesNumber:'3 courses',
      students:'15 Student',
      rate:5,
      reviewers:'13',
      tutorLanguages:'EN,AR',
    },
    {
      image: 'assets/images/tutors/tutor3.png',
      tutor:'tutor name',
      country:'Egypt',
      university:'Mansoura University',
      faculity:'Computer Science',
      coursesNumber:'3 courses',
      students:'15 Student',
      rate:5,
      reviewers:'13',
      tutorLanguages:'EN,AR',
    },
    {
      image: 'assets/images/tutors/tutor4.png',
      tutor:'tutor name',
      country:'Egypt',
      university:'Mansoura University',
      faculity:'Computer Science',
      coursesNumber:'3 courses',
      students:'15 Student',
      rate:5,
      reviewers:'13',
      tutorLanguages:'EN,AR',
    },
    {
      image: 'assets/images/tutors/tutor5.png',
      tutor:'tutor name',
      country:'Egypt',
      university:'Mansoura University',
      faculity:'Computer Science',
      coursesNumber:'3 courses',
      students:'15 Student',
      rate:5,
      reviewers:'13',
      tutorLanguages:'EN,AR',
    },
    {
      image: 'assets/images/tutors/tutor6.png',
      tutor:'tutor name',
      country:'Egypt',
      university:'Mansoura University',
      faculity:'Computer Science',
      coursesNumber:'3 courses',
      students:'15 Student',
      rate:5,
      reviewers:'13',
      tutorLanguages:'EN,AR',
    },
    {
      image: 'assets/images/tutors/tutor7.png',
      tutor:'tutor name',
      country:'Egypt',
      university:'Mansoura University',
      faculity:'Computer Science',
      coursesNumber:'3 courses',
      students:'15 Student',
      rate:5,
      reviewers:'13',
      tutorLanguages:'EN,AR',
    },
    {
      image: 'assets/images/tutors/tutor8.png',
      tutor:'tutor name',
      country:'Egypt',
      university:'Mansoura University',
      faculity:'Computer Science',
      coursesNumber:'3 courses',
      students:'15 Student',
      rate:5,
      reviewers:'13',
      tutorLanguages:'EN,AR',
    },
    {
      image: 'assets/images/tutors/tutor9.png',
      tutor:'tutor name',
      country:'Egypt',
      university:'Mansoura University',
      faculity:'Computer Science',
      coursesNumber:'3 courses',
      students:'15 Student',
      rate:5,
      reviewers:'13',
      tutorLanguages:'EN,AR',
    },
    {
      image: 'assets/images/tutors/tutor10.png',
      tutor:'tutor name',
      country:'Egypt',
      university:'Mansoura University',
      faculity:'Computer Science',
      coursesNumber:'3 courses',
      students:'15 Student',
      rate:5,
      reviewers:'13',
      tutorLanguages:'EN,AR',
    },
    {
      image: 'assets/images/tutors/tutor11.png',
      tutor:'tutor name',
      country:'Egypt',
      university:'Mansoura University',
      faculity:'Computer Science',
      coursesNumber:'3 courses',
      students:'15 Student',
      rate:5,
      reviewers:'13',
      tutorLanguages:'EN,AR',
    },
    {
      image: 'assets/images/tutors/tutor12.png',
      tutor:'tutor name',
      country:'Egypt',
      university:'Mansoura University',
      faculity:'Computer Science',
      coursesNumber:'3 courses',
      students:'15 Student',
      rate:5,
      reviewers:'13',
      tutorLanguages:'EN,AR',
    },

  ]
  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
        this.myForm = this.fb.group({
          country: new FormControl(),
          university: new FormControl(),
          faculity: new FormControl(),
        });
      this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
        ];
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
          { item_id: 1, name: 'Arts' },
          { item_id: 2, name: 'Science' },
          { item_id: 3, name: 'Engineering' },
          { item_id: 4, name: 'Medicine' },
          { item_id: 5, name: 'Law' },
          { item_id: 6, name: 'Education' }
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


  onFormSubmit(): void {
    console.log(this.selectedCountry);

    console.log('Form values:', this.myForm.value);
  }


}

