import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomMultiselectComponent } from './custom-multiselect.component';

describe('CustomMultiselectComponent', () => {
  let component: CustomMultiselectComponent;
  let fixture: ComponentFixture<CustomMultiselectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomMultiselectComponent]
    });
    fixture = TestBed.createComponent(CustomMultiselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
