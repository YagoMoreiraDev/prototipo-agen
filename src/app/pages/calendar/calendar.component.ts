import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import { FullCalendarModule } from '@fullcalendar/angular'; // FullCalendar Angular adapter
import dayGridPlugin from '@fullcalendar/daygrid'; // Day grid view plugin
import interactionPlugin from '@fullcalendar/interaction'; // Interaction plugin
import ptBrLocale from '@fullcalendar/core/locales/pt-br'; // Import locale pt-br

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [FullCalendarModule], // Import the FullCalendar module
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent {
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth', // Default view
    plugins: [dayGridPlugin, interactionPlugin], // Plugins used
    locales: [ptBrLocale], // Add the Portuguese locale
    locale: 'pt-br', // Set Portuguese as the default language
    dateClick: (arg) => this.handleDateClick(arg), // Event handler
    events: [
      { title: 'Evento 1', date: '2024-12-10T10:35:00' },
      { title: 'Evento 2', date: '2024-12-10T11:00:00' },
      { title: 'Evento 3', date: '2024-12-10T12:35:00' },
      { title: 'Evento 2', date: '2024-12-11' },
    ],
    headerToolbar: {
      left: 'prev,next today', // Navigation buttons
      center: 'title', // Calendar title (month/year)
      right: 'dayGridMonth,dayGridWeek,dayGridDay', // View options
    },
    aspectRatio: 1.8, // Adjust the aspect ratio
    height: 'auto', // Automatically adjust the height
  };

  handleDateClick(arg: any): void {
    alert('Data clicada: ' + arg.dateStr); // Handle the date click event
  }
}
