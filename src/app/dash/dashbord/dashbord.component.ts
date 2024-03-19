import { Component } from '@angular/core';
import { UpdateserviceComponent } from '../updateservice/updateservice.component';
import { ViewserviceComponent } from '../viewservice/viewservice.component';
import { CommonModule } from '@angular/common';
import { CenterOrdersComponent } from '../../center-orders/center-orders.component';
import { PageOfServiceComponent } from '../../page-of-service/page-of-service.component';
import { LoginService } from '../../services/login.service';
import { CreateserviceComponent } from '../createservice/createservice.component';
import { MESSAGEComponent } from './message/message.component';
import { CreateAgentComponent } from './create-agent/create-agent.component';
import { AllagentComponent } from './allagent/allagent.component';
import { CreateSingleServiceComponent } from '../create-single-service/create-single-service.component';
import { ViewSingleServiceComponent } from '../view-single-service/view-single-service.component';


@Component({
  selector: 'app-dashbord',
  standalone: true,
  imports: [UpdateserviceComponent,AllagentComponent,CreateAgentComponent,MESSAGEComponent,CreateserviceComponent,ViewserviceComponent,CommonModule,CenterOrdersComponent,PageOfServiceComponent,CreateSingleServiceComponent,ViewSingleServiceComponent],
  templateUrl: './dashbord.component.html',
  styleUrl: './dashbord.component.css'
})
export class DashbordComponent {

    activeComponent: string = 'CreateService';
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


