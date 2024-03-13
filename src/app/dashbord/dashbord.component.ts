import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ChartComponent } from './chart/chart.component';
import { CommonModule } from '@angular/common';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';

@Component({
  selector: 'app-dashbord',
  standalone: true,
  imports: [RouterLink,ChartComponent,CommonModule,Component1Component,Component2Component],
  templateUrl: './dashbord.component.html',
  styleUrl: './dashbord.component.css'
})
export class DashbordComponent {

  activeComponent: string | null = null;
  toggleComponent(componentName: string): void {
    // إذا كان المكون المطلوب هو المكون الحالي، قم بإغلاقه
    if (this.activeComponent === componentName) {
      this.activeComponent = null;
    } else {
      // إلا، قم بفتح المكون المطلوب
      this.activeComponent = componentName;
    }
  }
}
