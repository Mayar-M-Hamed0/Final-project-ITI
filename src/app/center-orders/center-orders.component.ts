import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../services/orders.service';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-center-orders',
  standalone: true,
  imports: [NgxPaginationModule],
  templateUrl: './center-orders.component.html',
  styleUrl: './center-orders.component.css'
})
export class CenterOrdersComponent implements OnInit {
  orders:any;
  crntpage:any
  constructor(private orderservice:OrdersService){

  }


  ngOnInit(){
    this.orderservice.getdata().subscribe((res:any)=>this.orders=res)



    console.log(this.orders);
  }


}
