import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ServiceformComponent } from './serviceform/serviceform.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , ServiceformComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Final';
}
