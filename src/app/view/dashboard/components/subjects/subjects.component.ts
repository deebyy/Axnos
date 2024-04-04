import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'src/app/core/interfaces/subject';
import { SharedService } from 'src/app/core/services/shared.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent {
  subjectForm!: FormGroup;
  @ViewChild('exampleModal') exampleModal: any;
  @ViewChild('exampleModal2') exampleModal2: any;
  constructor(private formBuilder: FormBuilder, private Ser: SharedService) { }
  subjects: any[] = [
    {
      "id": "283a",
      "courseName": "physics",
      "coursePrice": "10$",
      "professorName": "ali rheem",
      "status": "Deleted"
    },
    {
      "id": "4a91",
      "courseName": "physics11",
      "coursePrice": "10$",
      "professorName": "ahmed saeed",
      "status": "Deleted"
    },
    {
      "id": "fbd7",
      "courseName": "asd",
      "coursePrice": "20$",
      "professorName": "ali rheem",
      "status": "created"
    },
    {
      "id": "bf2c",
      "courseName": "physics101",
      "coursePrice": "10$",
      "professorName": "ddd",
      "status": "created"
    },
    {
      "id": "b69e",
      "courseName": "asd",
      "coursePrice": "30$",
      "professorName": "ali rheem",
      "status": "created"
    }
  ];
  obj = {
    id: '',
    courseName: '',
    coursePrice: '',
    professorName: '',
    status: ''
  };
  ProviderData!: Subject;
  ngOnInit() {
    this.initForm();
    //this.loadSubjects();
  }


  initForm(): void {
    this.subjectForm = this.formBuilder.group({
      courseName: ['', Validators.required],
      professorName: ['', Validators.required],
      coursePrice: ['', Validators.required]
    });
  }


  // loadSubjects(): void {
  //   this.Ser.getSubjects().subscribe(subjects => {
  //     this.subjects = subjects;
  //   });
  // }

  addSubject() {
    if (this.subjectForm.valid) {
      const newSubject: Subject = {
        courseName: this.subjectForm.value.courseName,
        coursePrice: this.subjectForm.value.coursePrice,
        professorName: this.subjectForm.value.professorName,
        status: 'created'
      };

      this.Ser.addSubject(newSubject).subscribe(() => {
        this.exampleModal.nativeElement.querySelector('.btn-close').click();
        Swal.fire({
          title: "Good job!",
          html: "<div style='text-align: center;'>The subject has been created successfully!</div>",
          icon: "success"
        });
      //  this.loadSubjects();
        this.subjectForm.reset();
        this.subjectForm.get('coursePrice')?.setValue('');
      });
    }
  }
  ChangeSubjectStatus(subject: Subject, Statuskeyword: string, id: any): void {
    switch (Statuskeyword) {
      case 'Publish':
        subject.status = 'published';
        Swal.fire({
          title: "Good job!",
          html: "<div style='text-align: center;'>The subject has been published successfully!</div>",
          icon: "success"
        });
        break;
      case 'Deactivate':
        subject.status = 'Deactivated';
        Swal.fire({
          title: "Good job!",
          html: "<div style='text-align: center;'>The subject has been Deactivated successfully! </div>",
          icon: "success"
        });
        break;
      case 'Reactivate':
        subject.status = 'published';
        Swal.fire({
          title: "Good job!",
          html: "<div style='text-align: center;'>The subject has been Reactivated and  published successfully!</div>",
          icon: "success"
        });
        break;
      case 'Delete':
        subject.status = 'Deleted';
        Swal.fire({
          title: "Good job!",
          html: "<div style='text-align: center;'>The subject has been Deleted successfully!</div>",
          icon: "error"
        });
        break;
      default:
        break;
    }

    this.Ser.updateSubject(subject, id).subscribe(() => {
     // this.loadSubjects();
    });
  }
  getbyid(id: any) {
    this.Ser.getSubjectById(id).subscribe((res) => {
      this.obj.courseName = res.courseName;
      this.obj.coursePrice = res.coursePrice;
      this.obj.professorName = res.professorName;
      this.obj.id = res.id || '';
      this.obj.status = res.status
    });
  }

  onSubmit() {
    console.log("subject befor edit", this.obj, this.obj.id);
    if (this.obj.id) {
      this.Ser.updateSubject(this.obj, this.obj.id).subscribe((res: Subject) => {
        console.log('Subject updated:', res);
       // this.loadSubjects();
        this.exampleModal2.nativeElement.querySelector('.btn-close').click();
      });
    } else {
      console.error('Subject ID is missing. Cannot update.');
    }
  }

}



