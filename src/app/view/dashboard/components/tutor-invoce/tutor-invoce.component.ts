import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
@Component({
  selector: 'app-tutor-invoce',
  templateUrl: './tutor-invoce.component.html',
  styleUrls: ['./tutor-invoce.component.scss']
})

export class TutorInvoceComponent implements AfterViewInit {
  displayedColumns: string[] = ['BookedDated', 'Subject', 'Name', 'CourseDate','Price' ,'TransferedOn','Transfered'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  BookedDated: any;
  Subject: string;
  Name: string;
  CourseDate: string;
  Price: string;
  TransferedOn:string;
  Transfered:string
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    BookedDated: '14.12.2023',
    Subject: 'Math1',
    Name: 'Ahmed Mohamed',
    CourseDate: 'On Monday 01.03.2024From 10:00AM to 11:00AM',
    Price: '10$',
    TransferedOn: '15.1.2023',
    Transfered: 'Transfered'
  },
  {
    BookedDated: '14.12.2023',
    Subject: 'Math1',
    Name: 'Ahmed Mohamed',
    CourseDate: 'On Monday 01.03.2024From 10:00AM to 11:00AM',
    Price: '10$',
    TransferedOn: '15.1.2023',
    Transfered: 'Not-Transfered'
  },
  {
    BookedDated: '14.12.2023',
    Subject: 'Math1',
    Name: 'Ahmed Mohamed',
    CourseDate: 'On Monday 01.03.2024From 10:00AM to 11:00AM',
    Price: '10$',
    TransferedOn: '15.1.2023',
    Transfered: 'Transfered'
  },



];
