import { Component } from '@angular/core';
import { UpdateserviceComponent } from '../updateservice/updateservice.component';
import { CreateserviceComponent } from '../createservice/createservice.component';
import { ViewserviceComponent } from '../viewservice/viewservice.component';
import { CommonModule } from '@angular/common';
import { ServiceformComponent } from '../../serviceform/serviceform.component';
import { CenterOrdersComponent } from '../../center-orders/center-orders.component';
import { PageOfServiceComponent } from '../../page-of-service/page-of-service.component';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-dashbord',
  standalone: true,
  imports: [UpdateserviceComponent,CreateserviceComponent,ViewserviceComponent,CommonModule,ServiceformComponent,CenterOrdersComponent,PageOfServiceComponent],
  templateUrl: './dashbord.component.html',
  styleUrl: './dashbord.component.css'
})
export class DashbordComponent {

    activeComponent: string = 'createservice';
resp :any =''
    ngOnInit(): void {

    }

    constructor(private http:LoginService){
      this.http.auth().subscribe(res=>{

        this.resp = res
      })
    }

    setActiveComponent(componentName: string): void {
        this.activeComponent = componentName;
    }


}


