import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ServicesService } from '../services/services.service';
import { NgxPaginationModule } from 'ngx-pagination';


@Component({
  selector: 'app-page-of-service',
  standalone: true,
  imports: [RouterLink,NgxPaginationModule],
  templateUrl: './page-of-service.component.html',
  styleUrl: './page-of-service.component.css'
})
export class PageOfServiceComponent {


  crntpage:any 
  datafromapi : any = [];
constructor( private resevedata:ServicesService){

  this.resevedata.getdata().subscribe(res => {

    this.datafromapi = res;
     console.log("this is the response of api",this.datafromapi)
  })
}
 










  goToTop(){
    window.scrollTo({top:0,behavior:'smooth'})
  }

 



}
  

