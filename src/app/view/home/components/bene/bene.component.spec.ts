import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneComponent } from './bene.component';

describe('BeneComponent', () => {
  let component: BeneComponent;
  let fixture: ComponentFixture<BeneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BeneComponent]
    });
    fixture = TestBed.createComponent(BeneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
