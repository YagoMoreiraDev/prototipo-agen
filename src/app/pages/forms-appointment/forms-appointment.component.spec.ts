import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsAppointmentComponent } from './forms-appointment.component';

describe('FormsAppointmentComponent', () => {
  let component: FormsAppointmentComponent;
  let fixture: ComponentFixture<FormsAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsAppointmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
