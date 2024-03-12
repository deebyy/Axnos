import { Component } from '@angular/core';
import { TutorService } from 'src/app/core/services/tutor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  isTutor:boolean = false;
  constructor(private tutorService: TutorService){
    this.tutorService.isTutor$.subscribe(isTutor => {
      this.isTutor = isTutor;
    });
  }
  firesweetAlert(){
      Swal.fire({
        html: "<div class='parentSweet'> <span class='title'>Would you like to be a tutor?</span> <br/>  <span class='subtitle'>Please complete your Profile first</span></div> ",
        showCancelButton: true,
        cancelButtonColor: "#d33",
        confirmButtonColor: "#3085d6",
        cancelButtonText:"No, return to student Profile",
        confirmButtonText: "Yes, confirm",
        customClass: {
          confirmButton: 'confirm-button-class',
          cancelButton: 'cancel-button-class'
        }
        }).then((result) => {
        this.isTutor = true;
        this.tutorService.setIsTutor(this.isTutor);
        });
}










}
