import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingSubjectComponent } from './booking-subject.component';

describe('BookingSubjectComponent', () => {
  let component: BookingSubjectComponent;
  let fixture: ComponentFixture<BookingSubjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookingSubjectComponent]
    });
    fixture = TestBed.createComponent(BookingSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
