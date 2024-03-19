import { CommonModule } from '@angular/common';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgxPaginationModule, } from 'ngx-pagination';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-message',
  standalone: true,
  imports: [CommonModule,NgxPaginationModule],
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export class MESSAGEComponent {
msg : any = ''
loading: boolean = true; 
serviceIdToDelete: number | null = null;
crntpage:any  




  constructor(private http:HttpClient){

    const token: any = sessionStorage.getItem('token');
    if (token) {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`

      });
    
    
    
      this.http.get('http://127.0.0.1:8000/api/GetContact',{ headers: headers }).subscribe(res=>{

      
      this.msg = res
      this.loading = false;
      })
    }

  
  }

  openConfirmationModal(serviceId: number) {
    this.serviceIdToDelete = serviceId;
    Swal.fire({
      title: 'Confirm Delete',
      text: 'Are you sure you want to delete this service?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.deleteService(serviceId);
        setTimeout(() => {
          window.location.reload();
        }, 500);
      }
    });
  }
  
  
  deleteService(serviceId: number) {
    const token: any = sessionStorage.getItem('token');
    if (token) {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      });
      
    this.http.delete(`http://127.0.0.1:8000/api/DelContact/${serviceId}`,{ headers: headers })
        .subscribe(
            response => {
            
                console.log('Deleted successfully', response);
            
            },
            error => {
             
                console.error('Error deleting:', error);
            }
        );
  }
  }}
