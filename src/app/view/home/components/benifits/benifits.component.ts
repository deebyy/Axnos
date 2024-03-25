
import {  ElementRef, OnInit,Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-benifits',
  templateUrl: './benifits.component.html',
  styleUrls: ['./benifits.component.scss']
})

export class BenifitsComponent {
  @ViewChild('exampleModal') modal: any;

  benefits = [
    {
      title: 'Your University Subject',
      image: 'assets/images/home/cap.png',
      content: ' engage directly with colleagues who have previously studied the same subjects under the guidance of the same professor.'
    },
    {
      title: 'Maximize Your Learning Efficiency',
      image: 'assets/images/home/learning.png',
      content: 'where an hour spent with your colleague equals 30 hours of solo study.'
    },
    {
      title: 'Learn with colleagues',
      image: 'assets/images/home/user.png',
      content: 'Join a collaborative learning experience with your peers.'
    }


  ];
  // ngAfterViewInit(): void {
  //   this.modal.nativeElement.addEventListener('shown.bs.modal', () => {
  //     this.playVideo();
  //   });
  //   this.modal.nativeElement.addEventListener('hidden.bs.modal', () => {
  //     this.pauseVideo();
  //   });
  // }

  playVideo(): void {
    const videoElement: HTMLVideoElement = this.modal.nativeElement.querySelector('video');
    if (videoElement) {
      videoElement.play();
    }
  }
  pauseVideo(): void {
    const videoElement: HTMLVideoElement = this.modal.nativeElement.querySelector('video');
    if (videoElement) {
      videoElement.pause();
    }
  }
}
