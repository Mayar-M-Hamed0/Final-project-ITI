import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ServicesService } from '../services/services.service';


@Component({
  selector: 'app-page-of-service',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './page-of-service.component.html',
  styleUrl: './page-of-service.component.css'
})
export class PageOfServiceComponent {



  datafromapi : any = [];
constructor( private ApisService_:ServicesService){

  this.ApisService_.pushdataall().subscribe(res => {

    this.datafromapi = res;
     console.log("this is the response of api",this.datafromapi)
  })
}
 










  goToTop(){
    window.scrollTo({top:0,behavior:'smooth'})
  }

 



}
  

