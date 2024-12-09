import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AppointmentService } from '../../services/appointment.service';

@Component({
  selector: 'app-forms-appointment',
  standalone: true,
  imports: [
    RouterModule,
    ReactiveFormsModule
  ],
  templateUrl: './forms-appointment.component.html',
  styleUrl: './forms-appointment.component.css'
})
export class FormsAppointmentComponent implements OnInit {
  appointmentForm!: FormGroup;

  constructor(private appointmentsService: AppointmentService, private router: Router) {
  }

  ngOnInit() {
    this.startForms();
  }

  startForms() {
    this.appointmentForm = new FormGroup({
      nameRequester: new FormControl('', Validators.required),
      nameRequested: new FormControl('', Validators.required),
      subject: new FormControl('', Validators.required),
      dateRequest: new FormControl('', Validators.required),
      timeRequest: new FormControl('', Validators.required)
    })
  }

  saveForm() {
    const newAppointment = this.appointmentForm.value;

    // Certifique-se de formatar corretamente a data
    const formattedDate = new Date(newAppointment.dateRequest + 'T' + newAppointment.timeRequest);
    newAppointment.dateRequest = formattedDate;

    this.appointmentsService.postAgendamentos(newAppointment);

    this.appointmentForm.reset();
    this.router.navigateByUrl('') ;
  }
}
