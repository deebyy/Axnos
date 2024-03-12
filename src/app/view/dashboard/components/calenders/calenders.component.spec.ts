import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendersComponent } from './calenders.component';

describe('CalendersComponent', () => {
  let component: CalendersComponent;
  let fixture: ComponentFixture<CalendersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalendersComponent]
    });
    fixture = TestBed.createComponent(CalendersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
