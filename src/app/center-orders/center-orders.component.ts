import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../services/orders.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';

import { NgxPaginationModule } from 'ngx-pagination';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-center-orders',
  standalone: true,
  imports: [NgxPaginationModule,RouterLink],
  templateUrl: './center-orders.component.html',
  styleUrl: './center-orders.component.css'
})
export class CenterOrdersComponent implements OnInit {

  crntpage:any
  servicedata:any;
  constructor(private orderservice:OrdersService ,private http:HttpClient){

  }




  ngOnInit(){
    const token: any = sessionStorage.getItem('token');
  if (token) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });


      this.http.get('http://127.0.0.1:8000/api/service-center',{ headers: headers }).subscribe(
        (res:any)=>{
  this.servicedata = res ;

  console.log(res ,"hhh");
  })

    }




  }


}
