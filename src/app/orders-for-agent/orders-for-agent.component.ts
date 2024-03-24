import { Component, OnInit } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { ServicesService } from '../services/services.service';
import { ActivatedRoute ,Params, Router, RouterLink} from '@angular/router';
import Swal from 'sweetalert2';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  constructor(private service:ServicesService ,private http:HttpClient, private route:ActivatedRoute , private router:Router){}
  ngOnInit(): void {
    const token: any = sessionStorage.getItem('token');
  if (token) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
          });

    this.route.params.subscribe((params:Params)=>{this.service_center_id=params['id']})
    console.log(this.service_center_id)
    this.service.getordersforcenterservice(this.service_center_id,{headers:headers}).subscribe(res=>{this.orders=res; console.log(res) } )
        }
  }


  archive(id:number){
    const token: any = sessionStorage.getItem('token');
  if (token) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
          });

    this.service.softdelete(id,{headers:headers}).subscribe({
      next:res=>{

             setTimeout(() => {

              this.router.navigate([`/archive/`+id]);
             }, 2000);}
    });}
    this.http.get(`http://127.0.0.1:8000/api/send/`+id ).subscribe({
      next:res=>{

             setTimeout(() => {

              this.router.navigate([`/archive/`+id]);
             }, 2000);}
    })
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
        this.forcedelete(serviceId);

      }
    });
  }




  forcedelete(id:number){
    this.service.forcedeleteorder(id).subscribe({
      next:res=>{

             setTimeout(() => {

              this.router.navigate([`/orderforcenter/`+id]);
             }, 2000);}
    });
    this.http.get(`http://127.0.0.1:8000/api/reject/`+id ).subscribe({
      next:res=>{

             setTimeout(() => {

              this.router.navigate([`/archive/`+id]);
             }, 2000);}
    })
  }
}
