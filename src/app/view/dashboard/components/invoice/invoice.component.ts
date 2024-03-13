import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent {
  displayedColumns: string[] = ['BookedDated', 'Subject', 'CourseDate','Price', 'status'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  BookedDated: any;
  Subject: string;
  CourseDate: string;
  Price: string;
  status:string;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    BookedDated: '14.12.2023',
    Subject: 'Math1',
    CourseDate: 'On Monday 01.03.2024From 10:00AM to 11:00AM',
    Price: '10$',
    status: 'Completed'
  },
  {
    BookedDated: '14.12.2023',
    Subject: 'Math1',
    CourseDate: 'On Monday 01.03.2024From 10:00AM to 11:00AM',
    Price: '10$',
    status: 'Canceled'

  },
  {
    BookedDated: '14.12.2023',
    Subject: 'Math1',
    CourseDate: 'On Monday 01.03.2024From 10:00AM to 11:00AM',
    Price: '10$',
    status: 'Completed'

  },



];


