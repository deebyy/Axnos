import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CountryInfo, Faculty, University } from 'src/app/core/interfaces/models';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-tutors',
  templateUrl: './tutors.component.html',
  styleUrls: ['./tutors.component.scss']
})
export class TutorsComponent {

  myForm!:FormGroup;
  Subjects: any = [];
  rate: any =4.5;
  Countries: CountryInfo[] = [];
  Universites: University[] = [];
  Faculties: Faculty[] = [];
  selectedCountry: any
  selectedUniversity: any;
  selectedFaculity: any


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
  constructor(private fb: FormBuilder, private apiSer: ApiService) {

  }

  ngOnInit() {
        this.myForm = this.fb.group({
          country: new FormControl(),
          university: new FormControl(),
          faculity: new FormControl(),
        });
        this.apiSer.getAllCountries().subscribe((res: CountryInfo[]) => {
          console.log(res);
          this.Countries = res
        })
        this.apiSer.getAllUniversities().subscribe((res: University[]) => {
          console.log(res);
          this.Universites = res
        })

      this.Subjects = [
      { item_id: 1, item_text: 'Mathematics' },
      { item_id: 2, item_text: 'History' },
      { item_id: 3, item_text: 'Biology' },
      { item_id: 4, item_text: 'Physics' },
      { item_id: 5, item_text: 'Computer Science' },
      { item_id: 6, item_text: 'Philosophy' }
        ];
  }

  // Fetch faculties based on the selected university ID
  onUniversityChange(event: any): void {
    if (this.selectedUniversity != null) {
      this.apiSer.getFaculityByUnivesityID(this.selectedUniversity).subscribe((faculties: Faculty[]) => {
        console.log("faculties", faculties);
        this.Faculties = faculties;
      })
    } else {
      this.Faculties = [];
      console.log("faculties are empty now");
    }
  }
 // Fetch Universities based on the selected Country ID
  onCountryChange(event: any): void {
    if (this.selectedCountry != null) {
      this.apiSer.getUniversityByCountryID(this.selectedCountry).subscribe((Universities:University[]) => {
        console.log("Universities", Universities);
        this.Universites = Universities;
      })
    } else {
      this.Faculties = [];
      console.log("Universities are empty now");
    }
  }
  onFormSubmit(): void {
    console.log('Form values:', this.myForm.value);
  }


}

