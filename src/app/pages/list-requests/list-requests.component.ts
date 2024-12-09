import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../../services/appointment.service';
import { DatePipe } from '@angular/common';

interface Appointment {
  nameRequester: string
  nameRequested: string
  subject: string
  dateRequest: Date 
  timeRequest: string
}

@Component({
  selector: 'app-list-requests',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './list-requests.component.html',
  //styleUrl: './list-requests.component.css'
})
export class ListRequestsComponent implements OnInit {
  appointments: Appointment[] = []

  constructor(private appointmentService: AppointmentService) {
  }

  //hook de clico de vida dos componentes Angular
  ngOnInit() {
    this.appointments = this.appointmentService.getAgendamentos();
    console.log('Agendamentos carregados:', this.appointments);
  }
}
