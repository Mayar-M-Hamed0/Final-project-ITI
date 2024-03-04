import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ServicesService } from '../services/services.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, NgModel } from '@angular/forms';
import { FilterPipe } from '../filter.pipe';
import { FilterPipeModule } from 'ngx-filter-pipe';
;


@Component({
  selector: 'app-page-of-service',
  standalone: true,
  imports: [RouterLink,NgxPaginationModule,FormsModule,FilterPipe,],
  templateUrl: './page-of-service.component.html',
  styleUrl: './page-of-service.component.css'
})
export class PageOfServiceComponent {

searchtext:any;
  crntpage:any
  datafromapi : any = [];
  selectedPlace:any='';
  fselectedPlace:any='';
  selectedMark:any='';
  fselectedMark:any='';
  selectedService:any='';
  fselectedService:any='';

constructor( private resevedata:ServicesService){

  this.resevedata.getdata().subscribe(res => {

    this.datafromapi = res;
     console.log("this is the response of api",this.datafromapi,this.searchtext)
    })
  }




  goToTop(){
    window.scrollTo({top:0,behavior:'smooth'})
  }



}


