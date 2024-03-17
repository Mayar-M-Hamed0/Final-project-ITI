import { Component } from '@angular/core';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-center-orders',
  standalone: true,
  imports: [],
  templateUrl: './center-orders.component.html',
  styleUrl: './center-orders.component.css'
})
export class CenterOrdersComponent {
  orders:any;
  constructor(private orderservice:OrdersService){}
  grtorders(){
    this.orderservice.getdata().subscribe((res:any)=>this.orders=res)
  }

  ngOnInit(){
    this.grtorders()


    console.log(this.orders);
  }


}
