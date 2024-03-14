import { Component } from '@angular/core';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { main } from '@popperjs/core';
import { MainComponent } from '../main/main.component';
import { TopWidgetsComponent } from '../top-widgets/top-widgets.component';

@Component({
  selector: 'app-the-dashboard',
  standalone: true,
  imports: [SideNavComponent,MainComponent,],
  templateUrl: './the-dashboard.component.html',
  styleUrl: './the-dashboard.component.css'
})
export class TheDashboardComponent {

}
