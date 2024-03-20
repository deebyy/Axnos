import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
interface FromTo {
  name: string;
}
interface summery {
  date: string,
  day?: string,
  from: string,
  to: string,
  totalHours: number;
}
@Component({
  selector: 'app-booking-subject',
  templateUrl: './booking-subject.component.html',
  styleUrls: ['./booking-subject.component.scss']
})
export class BookingSubjectComponent {
  myForm!: FormGroup;
  fromHour: FromTo[] | undefined;
  toHour: FromTo[] | undefined;
  months: string[] = ['January', 'February', 'March', 'April'];
  sessions: any[] = [];
  bindedsession: any[] = [];

  years: number[] = [2016, 2017, 2018, 2019];
  selectedFromHour: FromTo | undefined;
  selectedToHour: FromTo | undefined;

  date2: any | undefined = '';
  totalHoursArray: number[] = [];
  CuyrrentObject: summery = {
    date: '',
    day: '',
    from: '',
    to: '',
    totalHours: 0
  }
  newsession: summery[] = [this.CuyrrentObject];

  constructor(private formBuilder: FormBuilder, private datePipe: DatePipe,private toastrService: ToastrService) {
    this.myForm = this.formBuilder.group({
      date: [null, Validators.required],
      from: [null, Validators.required],
      to: [null, Validators.required],
      details: [null],
      owner: [null, Validators.required],
      CVV: [null, Validators.required],
      cardnum: [null, Validators.required],
      month: ['January', Validators.required],
      year: [2016, Validators.required]
    });

    this.calculateAndStoreTotalHours();
  }


  ngOnInit() {

    this.fromHour = [
      { name: '8 PM' },
      { name: '9 PM' },
      { name: '1 AM' },
      { name: '5 AM' },
      { name: '2 PM' }
    ];
    this.toHour = [
      { name: '8 PM' },
      { name: '9 PM' },
      { name: '1 AM' },
      { name: '5 AM' },
      { name: '2 PM' }
    ];

  }

  formatDate(date: string | null): string {
    if (date) {
      return this.datePipe.transform(date, 'dd/MM/yyyy') || '';
    } else {
      return '';
    }
  }
  formatDayName(dateString: string): string {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { weekday: 'long' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  }
  onSubmit() {
    // Remove the 'day' property from each object in the 'newsession' array
    const sessionsWithoutDay = this.newsession.map(session => {
      const { day, ...sessionWithoutDay } = session;
      return sessionWithoutDay;
    });
    const formattedSessions = sessionsWithoutDay.map(session => {
      return {
        ...session,
        date: this.formatDate(session.date)
      };
    });

    console.log("sessions",formattedSessions);
    // Calculate total hours for each session
    const sessionsWithTotalHours = formattedSessions.map(session => {
      const totalHours = this.calculateTotalHoursReserved(session.from, session.to);
      return {
        ...session,
        totalHours: totalHours
      };
    });

    // Log the total hours for each session
    console.log('Total hours for each session:', sessionsWithTotalHours.map(session => session.totalHours));
    const totalHoursSum = sessionsWithTotalHours.reduce((sum, session) => sum + session.totalHours, 0);
    console.log('Total sum of hours:', totalHoursSum);







    if (this.myForm.valid) {
      const formValuesWithSessions = {
        details: this.myForm.value.details,
        owner: this.myForm.value.owner,
        CVV: this.myForm.value.CVV,
        cardnum: this.myForm.value.cardnum,
        month: this.myForm.value.month,
        year: this.myForm.value.year,
        sessions: formattedSessions
      };
      console.log('Form values:', formValuesWithSessions);
    } else {
      console.log('Form not valid');
    }
  }

  resetSessionForm() {
    this.CuyrrentObject = {
      date: '',
      day: '',
      from: '',
      to: '',
      totalHours: 0
    };
    this.newsession.push(this.CuyrrentObject);
  }

  calculateTotalHoursReserved(from: string, to: string): number {
    const fromTime = this.convertTimeStringTo24Hours(from);
    const toTime = this.convertTimeStringTo24Hours(to);
    let totalHours = toTime - fromTime;
    if (totalHours < 0) {
      totalHours += 24;
    }
    return totalHours;
  }

  calculateAndStoreTotalHours(): number {
    this.totalHoursArray = [];
  for (const session of this.newsession) {
    if (session.from !== '' && session.to !== '') {
      const totalHours = this.calculateTotalHoursReserved(session.from, session.to);
      session.totalHours = totalHours;
      this.totalHoursArray.push(totalHours);
    } else {
      session.totalHours = 0;
      this.totalHoursArray.push(0);
    }
  }
    const totalHoursSum = this.totalHoursArray.reduce((sum, sessionTotalHours) => sum + sessionTotalHours, 0);

    return totalHoursSum;
  }

  convertTimeStringTo24Hours(timeString: string): number {
    if (!timeString) {
      // Handle the case where timeString is empty or undefined
      return 0; // Or return any default value you prefer
    }

    const [hourString, indicator] = timeString.split(' ');
    let hour = parseInt(hourString, 10);

    if (indicator && indicator.toLowerCase() === 'pm' && hour !== 12) {
      hour += 12;
    }
    if (indicator && indicator.toLowerCase() === 'am' && hour === 12) {
      hour = 0;
    }
    return hour;
  }

  deleteSession(date:any,from:any,to:any,index: number): void {
    this.newsession.splice(index, 1);
    this.calculateAndStoreTotalHours();
    this.resetSessionForm();
    if (this.totalHoursArray.length === 0) {
      this.totalHoursArray = [0];
    }

    this.toastrService.error( `The  ${this.formatDate(date)} From ${from} To ${to} has been deleted `);


  }

   firetoast(){
    if(this.CuyrrentObject.date && this.CuyrrentObject.from && this.CuyrrentObject.to ){
      console.log("object has data ");
      this.toastrService.success( `The  ${this.formatDate(this.CuyrrentObject.date)} From ${this.CuyrrentObject.from} To ${this.CuyrrentObject.to} has been chosen `);

    }
  }


}










