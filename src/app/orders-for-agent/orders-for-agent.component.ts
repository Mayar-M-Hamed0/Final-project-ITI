import { Component, OnInit } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { ServicesService } from '../services/services.service';
import { ActivatedRoute ,Params, RouterLink} from '@angular/router';
import Swal from 'sweetalert2';
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
  serviceIdToDelete: number | null = null;
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



  openConfirmationModal(serviceId: number) {
    this.serviceIdToDelete = serviceId;
    Swal.fire({
      title: 'Confirm Delete',
      text: 'Are you sure you want to delete this ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.ondelete(serviceId);
       
      }
    });
  }
  



  forcedelete(id:number){
    this.service.forcedeleteorder(id).subscribe({
      next:res=>{

             setTimeout(() => {

              window.location.reload();
             }, 2000);}
    });
  }
}
