import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { MainComponent } from '../main/main.component';

@Component({
  selector: 'app-the-dashboard',
  standalone: true,
  imports: [HeaderComponent,SideNavComponent,MainComponent],
  templateUrl: './the-dashboard.component.html',
  styleUrl: './the-dashboard.component.css'
})
export class TheDashboardComponent {

}
