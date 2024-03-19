import { CommonModule } from '@angular/common';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgxPaginationModule, } from 'ngx-pagination';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-allagent',
  standalone: true,
  imports: [CommonModule,NgxPaginationModule],
  templateUrl: './allagent.component.html',
  styleUrl: './allagent.component.css'
})
export class AllagentComponent {
  agents : any = ''
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
    
    
    
      this.http.get('http://127.0.0.1:8000/api/Getagents',{ headers: headers }).subscribe(res=>{

      
      this.agents = res
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
  
  
  deleteService(agent: number) {
    const token: any = sessionStorage.getItem('token');
    if (token) {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      });
      
    this.http.delete(`http://127.0.0.1:8000/api/Delagents/${agent}`,{ headers: headers })
        .subscribe(
            response => {
            
                console.log('Deleted successfully', response);
            
            },
            error => {
             
                console.error('Error deleting:', error);
            }
        );
  }
  }
}
