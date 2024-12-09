import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsReservationComponent } from './forms-reservation.component';

describe('FormsReservationComponent', () => {
  let component: FormsReservationComponent;
  let fixture: ComponentFixture<FormsReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsReservationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
