import { Component, OnInit } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { ServicesService } from '../services/services.service';
import { ActivatedRoute ,Params, RouterLink} from '@angular/router';

@Component({
  selector: 'app-orders-for-agent',
  standalone: true,
  imports: [NgxPaginationModule,RouterLink],
  templateUrl: './orders-for-agent.component.html',
  styleUrl: './orders-for-agent.component.css'
})
export class OrdersForAgentComponent implements OnInit {
  service_center_id!:number
  crntpage:any;
  orders:any;
  constructor(private service:ServicesService , private route:ActivatedRoute){}
  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{this.service_center_id=params['id']})
    console.log(this.service_center_id)
    this.service.getordersforcenterservice(this.service_center_id).subscribe(res=>{this.orders=res; console.log(res) } )
  }
  ondelete(id:number){
    this.service.softdelete(id).subscribe({
      next:res=>{

             setTimeout(() => {

              window.location.reload();
             }, 2000);}
    });
  }
}
