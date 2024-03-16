import { Component } from '@angular/core';
import { UpdateserviceComponent } from '../updateservice/updateservice.component';
import { CreateserviceComponent } from '../createservice/createservice.component';
import { ViewserviceComponent } from '../viewservice/viewservice.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashbord',
  standalone: true,
  imports: [UpdateserviceComponent,CreateserviceComponent,ViewserviceComponent,CommonModule],
  templateUrl: './dashbord.component.html',
  styleUrl: './dashbord.component.css'
})
export class DashbordComponent {

    activeComponent: string = 'createservice';

    ngOnInit(): void {
        
    }

    setActiveComponent(componentName: string): void {
        this.activeComponent = componentName;
    }
}


