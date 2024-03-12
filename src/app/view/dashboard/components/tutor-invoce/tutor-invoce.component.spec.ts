import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorInvoceComponent } from './tutor-invoce.component';

describe('TutorInvoceComponent', () => {
  let component: TutorInvoceComponent;
  let fixture: ComponentFixture<TutorInvoceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TutorInvoceComponent]
    });
    fixture = TestBed.createComponent(TutorInvoceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
