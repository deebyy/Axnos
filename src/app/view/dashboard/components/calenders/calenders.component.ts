
import {
  Component,
  ChangeDetectionStrategy,
  Inject,
  ViewChild,
  TemplateRef
} from '@angular/core';
import { DOCUMENT } from "@angular/common";
import { NgbModal, ModalDismissReasons,NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours
} from 'date-fns';

import { Subject } from 'rxjs';

import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView
} from 'angular-calendar';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};

@Component({
  selector: 'app-calenders',
  templateUrl: './calenders.component.html',
  styleUrls: ['./calenders.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendersComponent {
  @ViewChild('modalContent', { static: true }) modalContent!: TemplateRef<any>;

  //view = 'month';
 // view: any = 'month';
  isEveryChecked: boolean = false;
  selectedStartDate: Date | undefined;
  selectedEndDate: Date | undefined;
  selectedStartTime: string = '';
  selectedEndTime: string = '';
  selectedFrequency: string = 'Daily';
  selectedRadio: string = 'every';
  selectedDayRadio: string = 'Day';
  selectedYearRadio: string = 'On';
  range: string = 'EndBy';
  daysnumber:number=1
  viewDate: Date = new Date();
  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;
  ShowSession:boolean=false;


  modalData!: {
    action: string;
    event: CalendarEvent;
  };
startTimes:any[]=[
  "12:00 AM","12:30 AM","12:00 AM","1:00 AM","1:30 AM","2:00 AM","2:30 AM","3:00 AM","3:30 AM","4:00 AM",
  "4:30 AM","5:30 AM","5:30 AM","6:00 AM","6:30 AM","7:00 AM","7:30 AM","8:00 AM","8:30 AM","9:00 AM",
  "9:30 AM","10:30 AM","10:30 AM","11:00 AM","11:30 AM",
  "12:00 PM","12:30 PM","12:00 PM","1:00 PM","1:30 PM","2:00 PM","2:30 PM","3:00 PM","3:30 PM","4:00 PM",
  "4:30 PM","5:30 PM","5:30 PM","6:00 PM","6:30 PM","7:00 PM","7:30 PM","8:00 PM","8:30 PM","9:00 PM",
  "9:30 PM","10:30 PM","10:30 PM","11:00 PM","11:30 PM",
];
durations:any[]=[
  "0 minutes","30 minutes","1 hour","2 hour","5 hour","0.5 days","1 days","1 week","2 week"
]
 months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
  actions: CalendarEventAction[] = [
    {
      label: '<i class="fa fa-fw fa-pencil text-primary"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      }
    },
    {
      label: '<i class="fa-solid fa-trash-can text-primary me-2"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter(iEvent => iEvent !== event);
        this.handleEvent('Deleted', event);
      }
    }
  ];

  refresh: Subject<any> = new Subject();

  events: CalendarEvent[] = [
    {
      start: subDays(startOfDay(new Date()), 1),
      end: addDays(new Date(), 1),
      title: 'A 3 day event',
      color: colors.red,
      actions: this.actions
    },
    {
      start: startOfDay(new Date()),
      title: 'An event with no end date',
      color: colors.yellow,
      actions: this.actions
    },
    {
      start: subDays(endOfMonth(new Date()), 3),
      end: addDays(endOfMonth(new Date()), 3),
      title: 'A long event that spans 2 months',
      color: colors.blue
    },
    {
      start: addHours(startOfDay(new Date()), 2),
      end: new Date(),
      title: 'A draggable and resizable event',
      color: colors.yellow,
      actions: this.actions,
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true
    }
  ];

  activeDayIsOpen = true;

  constructor(private modal: NgbModal) {}

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    console.log(date);
    const selectedEndDateWithExtraHour = new Date(date);
    selectedEndDateWithExtraHour.setHours(selectedEndDateWithExtraHour.getHours() + 1);
    this.selectedEndDate = selectedEndDateWithExtraHour;
    console.log("selectedEndDateWithExtraHour",selectedEndDateWithExtraHour);
    this.selectedStartDate = date;
    //this.selectedEndDate = date;
    let startHour = this.selectedStartDate.getHours();
    let endHour = this.selectedEndDate.getHours();
    startHour = (startHour % 12) || 12;
    endHour = (endHour % 12) || 12;
    const startPeriod = startHour >= 12 ? 'PM' : 'AM';
    const endPeriod = endHour >= 12 ? 'PM' : 'AM';
    console.log('Start Hour:', startHour, startPeriod);
    console.log('End Hour:', endHour, endPeriod);
    this.selectedStartTime = `${startHour}:00 ${startPeriod}`;
    this.selectedEndTime = `${endHour}:00 ${endPeriod}`;
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
        this.viewDate = date;
      }
    }
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd
  }: CalendarEventTimesChangedEvent): void {
    event.start = newStart;
    event.end = newEnd;
    this.handleEvent('Dropped or resized', event);
    this.refresh.next("");
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    this.modal.open(this.modalContent, { size: 'lg' });
  }

  addEvent(): void {
    this.events.push({
      title: 'New event',
      start: startOfDay(new Date()),
      end: endOfDay(new Date()),
      color: colors.red,
      draggable: true,
      resizable: {
        beforeStart: true,
        afterEnd: true
      }
    });
    this.refresh.next("");
  }
  deleteEvent(eventToDelete: CalendarEvent) {
    this.events = this.events.filter((event) => event !== eventToDelete);
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }


  toggleSession() {
    this.ShowSession = !this.ShowSession;
}

}
