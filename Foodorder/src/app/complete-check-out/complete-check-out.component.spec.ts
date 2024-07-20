import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteCheckOutComponent } from './complete-check-out.component';

describe('CompleteCheckOutComponent', () => {
  let component: CompleteCheckOutComponent;
  let fixture: ComponentFixture<CompleteCheckOutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompleteCheckOutComponent]
    });
    fixture = TestBed.createComponent(CompleteCheckOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
