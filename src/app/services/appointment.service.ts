import { Injectable } from '@angular/core';

interface Appointment {
  nameRequester: string
  nameRequested: string
  subject: string
  dateRequest: Date 
  timeRequest: string
  status: string
}

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private appointments: Appointment[] = []
  private readonly STORAGE_KEY = 'appointments';

  constructor() {
    //Utilizando o localStorege(só consigo salvar string) para obter dados, então vou precisar converter para obj usado JSON.parse
    //Agendamentos que vai vim do localStorage e estão no formato string
    const appointmentsLocalStorageString = localStorage.getItem(this.STORAGE_KEY);
    //Conversão para obj
    const appointmentsLocalStorageObj = appointmentsLocalStorageString ? JSON.parse(appointmentsLocalStorageString) : [];

    //Vou atribuir esses agendamentos ao array appointments
    this.appointments = appointmentsLocalStorageObj;

    //Salvando os agendamentos no localStorage
    //localStorage.setItem('agendamentos', JSON.stringify(this.appointments))  
  }

  getAgendamentos() {
    return this.appointments;
  }

  postAgendamentos(appointment: Appointment) {
    // Certifique-se de que a data seja uma instância de Date
    appointment.dateRequest = new Date(appointment.dateRequest);
  
    // Adicione o agendamento ao array local
    this.appointments.push(appointment);
  
    // Salve no localStorage
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.appointments));
  }
}
