import { Routes } from '@angular/router';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsAppointmentComponent } from './pages/forms-appointment/forms-appointment.component';
import { FormsReservationComponent } from './pages/forms-reservation/forms-reservation.component';

export const routes: Routes = [
    {path: 'agendamentos', component: CalendarComponent},
    {path: '', component: HomeComponent},
    {path: 'novo-agendamento', component: FormsAppointmentComponent},
    {path: 'reserva-agenda', component: FormsReservationComponent},
];
