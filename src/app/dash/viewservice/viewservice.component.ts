import { CommonModule } from '@angular/common';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Component} from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgxPaginationModule, } from 'ngx-pagination';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-viewservice',
  standalone: true,
  imports: [RouterLink,NgxPaginationModule,CommonModule],
  templateUrl: './viewservice.component.html',
  styleUrl: './viewservice.component.css'
})
export class ViewserviceComponent {
  loading: boolean = true; 
  activeComponent: string = 'createservice';
  setActiveComponent(componentName: string): void {
      this.activeComponent = componentName;
  }
  // pagenation
  crntpage:any  
  servicedata :any =''
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


    this.http.get('http://127.0.0.1:8000/api/service-center',{ headers: headers }).subscribe(res=>{
this.servicedata = res ;

console.log(this.servicedata);
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

    this.http.delete(`http://127.0.0.1:8000/api/service-center/${serviceId}`, { headers: headers })
      .subscribe(
        response => {
          Swal.fire({
            icon: 'success',
            title: 'Deleted successfully',
            text: 'Service has been deleted successfully.',
            confirmButtonText: 'Ok'
          });
          console.log('Deleted successfully', response);
          // تحديث البيانات المحلية بعد حذف الخدمة
          this.servicedata = this.servicedata.filter((service: any) => service.id !== serviceId);
        },
        error => {
          console.error('Error deleting:', error);
          // عرض رسالة الخطأ إذا حدث خطأ أثناء الحذف
          Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'An error occurred while deleting the service.',
            confirmButtonText: 'Ok'
          });
        }
      );
  }
}









}