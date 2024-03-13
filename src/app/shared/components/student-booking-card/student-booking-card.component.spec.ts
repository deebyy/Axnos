import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentBookingCardComponent } from './student-booking-card.component';

describe('StudentBookingCardComponent', () => {
  let component: StudentBookingCardComponent;
  let fixture: ComponentFixture<StudentBookingCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentBookingCardComponent]
    });
    fixture = TestBed.createComponent(StudentBookingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
