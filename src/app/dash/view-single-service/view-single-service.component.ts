import { Component } from '@angular/core';
import { NgxPaginationModule, } from 'ngx-pagination';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-single-service',
  standalone: true,
  imports: [NgxPaginationModule,RouterLink,CommonModule],
  templateUrl: './view-single-service.component.html',
  styleUrl: './view-single-service.component.css'
})
export class ViewSingleServiceComponent {

  loading: boolean = true; 
  activeComponent: string = 'createservice';
  setActiveComponent(componentName: string): void {
      this.activeComponent = componentName;
  }


  crntpage:any  
  singleservicedata :any =''
  serviceIdToDelete: number | null = null;


  // get service from api 
constructor(private http:HttpClient){
 
}



data(){
  const token: any = sessionStorage.getItem('token');
  if (token) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });


    this.http.get('http://127.0.0.1:8000/api/services',{ headers: headers }).subscribe(res=>{
this.singleservicedata = res ;

console.log(this.singleservicedata);
this.loading = false;

    },(error) => {
      console.error(error);
      this.loading = false; 
    })
  
  }

}

ngOnInit(): void {

  this.data();
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
    
  this.http.delete(`http://127.0.0.1:8000/api/service-center/${serviceId}`,{ headers: headers })
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



