import { Component } from '@angular/core';
import { ButtonComponent } from "../button/button.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [RouterModule, ButtonComponent],
  templateUrl: './main-page.component.html',
  //styleUrl: './main-page.component.css'
})
export class MainPageComponent {

}
