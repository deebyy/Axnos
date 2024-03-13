import { Component } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { TutorService } from 'src/app/core/services/tutor.service';

@Component({
  selector: 'app-dashboard-content',
  templateUrl: './dashboard-content.component.html',
  styleUrls: ['./dashboard-content.component.scss']
})
export class DashboardContentComponent {
  isTutor:boolean = false;
  currency:any ={};
  currencyEntries: any[] = [];
  constructor(private tutorService: TutorService,private apiSer:ApiService){
    this.tutorService.isTutor$.subscribe(isTutor => {
      this.isTutor = isTutor;
    });
  }
  ngOnInit(): void {
    this.apiSer.getCurrency().subscribe((res:any)=>{
      this.currency = res
      this.currencyEntries = Object.entries(res);
      console.log(res,   this.currencyEntries );

    })
  }
  getObjectKeys(obj: any): string[] {
    return Object.keys(obj);
  }
}
