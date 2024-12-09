import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListRequestsComponent } from "../list-requests/list-requests.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, ListRequestsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
