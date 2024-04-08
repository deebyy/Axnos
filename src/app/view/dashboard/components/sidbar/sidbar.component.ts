import { Component } from '@angular/core';
import { RouterLinkActive } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { TutorService } from 'src/app/core/services/tutor.service';
import { UserProfile } from 'src/app/core/interfaces/user';
import { ApiService } from 'src/app/core/services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-sidbar',
  templateUrl: './sidbar.component.html',
  styleUrls: ['./sidbar.component.scss']
})
export class SidbarComponent {
  isTutor:boolean = false;
  myForm!: FormGroup;
  Userinfo: UserProfile = {
    firstName: '',
    lastName: '',
    email: '',
    universityId: null,
    countryId: null,
    facultyId: null,
    phoneNumber: null,
    gender: null,
    dateOfBirth: null,
    languages: null,
    currency: null,
    bio: null,
    image: null
  };
  selectedFile!: File;
  progressPercent: number = 0;
  percentComplete: number = 0;
  public  path="assets/images/user/avatar-05.png";
  constructor( private fb: FormBuilder,
               private tutorService: TutorService,
               private authService: AuthenticationService,
               private apiSer:ApiService)
  {
    this.tutorService.isTutor$.subscribe(isTutor => {
      this.isTutor = isTutor;
      this.initializeForm();
    });

  }
  ngOnInit(): void {

    this.apiSer.getprofile().subscribe((res:any)=>{

      this.Userinfo = {
        firstName: res.firstName || res.given_name,
        lastName: res.lastName || res.family_name,
        email: res.email || '',
        universityId: res.universityId || null,
        countryId: res.countryId || null,
        facultyId: res.facultyId || null,
        phoneNumber: res.phoneNumber || null,
        gender: res.gender || null,
        dateOfBirth: res.dateOfBirth || null,
        languages: res.languages || null,
        currency: res.currency || null,
        bio: res.bio || null,
        image: res.image || this.path
      };

    })

    this.tutorService.percent$.subscribe(percent => {
      this.progressPercent = percent;

    });
  }
  initializeForm(): void  {
    const currentFormValues = this.myForm?.value;
    this.myForm = this.fb.group({
      image: ['',  Validators.required],

    });
  }
  // onFileSelected(event: any) {
  //   this.selectedFile = event.target.files[0];
  //   const reader = new FileReader();
  //   reader.onload = (e) => {
  //     this.Userinfo.image = reader.result as string;
  //   };
  //   reader.readAsDataURL(this.selectedFile);
  // }
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      this.Userinfo.image = reader.result as string;
      const formData = new FormData();
      formData.append('image', this.selectedFile);
      this.apiSer.UpdateUserProfile(formData).subscribe(res => {
        console.log(res);
      });
    };
    reader.readAsDataURL(this.selectedFile);
  }


  selectFileInput() {
    document.getElementById('b')?.click();
  }










}

