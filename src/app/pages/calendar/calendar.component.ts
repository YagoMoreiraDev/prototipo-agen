import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import { FullCalendarModule } from '@fullcalendar/angular'; // FullCalendar Angular adapter
import dayGridPlugin from '@fullcalendar/daygrid'; // Day grid view plugin
import interactionPlugin from '@fullcalendar/interaction'; // Interaction plugin
import ptBrLocale from '@fullcalendar/core/locales/pt-br'; // Import locale pt-br
import { NgIf, NgFor } from '@angular/common';
import { ButtonComponent } from "../../components/button/button.component";
import { RouterModule } from '@angular/router';
import { AppointmentService } from '../../services/appointment.service';

interface Appointment {
  nameRequester: string;
  nameRequested: string;
  subject: string;
  dateRequest: Date;
  timeRequest: string;
}

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [RouterModule, FullCalendarModule, NgIf, NgFor, ButtonComponent],
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnInit {
  appointments: Appointment[] = [];

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],
    locales: [ptBrLocale],
    locale: 'pt-br',
    dateClick: (arg) => this.handleDateClick(arg), // Event handler
    events: [], // Inicialmente vazio, será populado pelo serviço
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,dayGridWeek,dayGridDay',
    },
    aspectRatio: 1.8,
    height: 'auto',
  };

  constructor(private appointmentService: AppointmentService) {}

  ngOnInit(): void {
    // Obtenha os agendamentos do serviço
    this.appointments = this.appointmentService.getAgendamentos();
  
    // Verifique se as datas estão no formato correto e mapeie os eventos
    this.calendarOptions.events = this.appointments.map((appointment) => {
      // Certifique-se de que dateRequest é uma instância de Date
      const date = new Date(appointment.dateRequest);
  
      return {
        title: `${appointment.subject} - ${appointment.nameRequester}`,
        date: `${date.toISOString().split('T')[0]}T${appointment.timeRequest}`, // Concatenar data e hora
      };
    });
  }
  

  selectedEvents: { title: string; time: string }[] = []; // Lista de eventos do dia

  handleDateClick(arg: any): void {
    const clickedDate = arg.dateStr;

    const eventsOnClickedDate = this.calendarOptions.events
      ? (this.calendarOptions.events as any[]).filter((event) =>
          event.date.startsWith(clickedDate)
        )
      : [];

    this.selectedEvents = eventsOnClickedDate.map((event) => ({
      title: event.title,
      time: new Intl.DateTimeFormat('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
      }).format(new Date(event.date)),
    }));
  }
}
