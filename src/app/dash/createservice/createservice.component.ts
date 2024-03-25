import { log } from 'console';
import { CheckboxModule } from 'primeng/checkbox';
import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import Swal from 'sweetalert2';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgSelectModule } from '@ng-select/ng-select';
import { ServicesService } from '../../services/services.service';
import { UpdateserviceComponent } from '../updateservice/updateservice.component';
import { ViewserviceComponent } from '../viewservice/viewservice.component';
import { CenterOrdersComponent } from '../../center-orders/center-orders.component';
import { PageOfServiceComponent } from '../../page-of-service/page-of-service.component';
import { HttpClient,HttpHeaders,HttpErrorResponse  } from '@angular/common/http';
import {  throwError } from 'rxjs';
@Component({
  selector: 'app-createservice',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor,FormsModule,
    NgbAlertModule,
    CheckboxModule,
    MatCheckboxModule,NgSelectModule,
    UpdateserviceComponent,
    CreateserviceComponent,
    ViewserviceComponent,CommonModule
    ,
    CenterOrdersComponent,
    PageOfServiceComponent],
  templateUrl: './createservice.component.html',
  styleUrl: './createservice.component.css'
})






export class CreateserviceComponent {
  errorMessage: any = ''; // ????? errorMessage ?????? ???
  fullResponse: any;
  files:any
  msgres:any= ''
  serviceform: FormGroup;
  cars: { key: string; }[] = [];
  services: { key: string }[] = [];

  userImageUrl:any = '';
  userImageFile:any = ' ';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.serviceform = this.fb.group({
      name: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern(/^(010|011|012|015)\d{8}$/)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      location: ['', [Validators.required]],
      image: ['', [Validators.required]], // ??? ??????

      price: ['', [Validators.required]],
      services: ['', [Validators.required]],
      cars: ['', [Validators.required]],
      dayss: ['', [Validators.required]],
      startTime: ['', [Validators.required]],
      endTime: ['', [Validators.required]],

    });



    this.cars = [
      { key:'KIA' },
      { key: 'MAZDA' },
      { key: 'TOYOTA' },
      { key: 'SKODA'},
      { key:'SSANGYONG' },
      { key: 'Ford' },
      { key: 'BMW'  },
      { key: 'LADA' },
      { key: 'CITROËN'},
      { key: 'SUZUKI'},
      { key: 'SEAT' },
      { key:'RENAULT'},
      { key:  'HYUNDAI'},
      { key: 'NISSAN '},
      { key: 'VOLVO' },
      { key: 'BYD'},
      { key:'HONDA'},

    ];

    this.services= [
      { key: 'Mechanical'},
      { key: 'Electricity'},
      { key: 'Suspensions'},
      { key: 'Car Denting'},
      { key: 'paints' },
      { key: 'brakes' },
      { key: 'lubricants'},
      { key: 'Tires and batteries'},
      { key: 'gear box'},
      { key: 'A/C/Charge'},
      { key: 'Radiator',},
      { key: 'Fast Service', },
      { key: 'Computer detection'},
      { key: 'Car wash and care' },
      { key: 'Insurance companies'},
      { key:'Oil Change Offers + Preventive Maintenance'},
      { key: 'El-Mikaneeky BOSCH'},
      { key: 'Labor fees Discount'},
    ];

    this.schedule = this.days.map(() => ({ day: '', startTime: '', endTime: '' }));

  }


  selectedServices: any[] = []; 
  selectedCars: any[] = [];

  currentIndex: number = 0;
  days: number[] = [0, 1, 2, 3, 4, 5, 6]; 
  schedule: any[] = [];

  toggleVisibility(index: number): void {
    if (index < this.days.length - 1) {
      this.currentIndex = index + 1;
    } else {
      this.currentIndex = 0;
    }
  
   
    const selectedDaysData = this.schedule
      .filter(item => item.day !== "") 
      .map(item => ({
        day: item.day,
        startTime: item.startTime,
        endTime: item.endTime
      }));
  
    console.log(selectedDaysData);
  }
  
  



  
  onFileSelected(event:any){
    this.userImageUrl = URL.createObjectURL(event.target.files[0]);
    this.userImageFile = event.target.files[0];
  }




  hatelservice(){

  console.log(this.selectedServices);
  
}
hatelcar(){
  console.log(this.selectedCars);


}


  handelForm(e:any) {
 
    e.preventDefault();


    let mappedCars = this.selectedCars.map(car => {
      return { key: car };
  });
  let mapservices = this.selectedServices.map(car => {
    return { key: car };
});



const selectedDaysData = this.schedule
.filter(item => item.day !== "") 
.map(item => ({
  day: item.day,
  startTime: item.startTime,
  endTime: item.endTime
}));

console.log(selectedDaysData);


let formData = new FormData();
formData.append('image',this.userImageFile);
formData.append('name', this.serviceform.value.name);
formData.append('price', this.serviceform.value.price);
formData.append('phone', this.serviceform.value.phone);
formData.append('description', this.serviceform.value.description);
formData.append('location', this.serviceform.value.location);
formData.append('days', JSON.stringify(selectedDaysData));
formData.append('cars', JSON.stringify(mappedCars));
formData.append('services',JSON.stringify(mapservices));





  if (typeof window !== 'undefined') {
    const token: any = localStorage.getItem('token');
    if (token) {

      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });

      return this.http.post('http://127.0.0.1:8000/api/service-center/',
      formData,
        { headers: headers }
      ).subscribe(
        (res) => {
          this.msgres = res;

          Swal.fire({
            icon: 'success',
            title: 'service Created!',
            showConfirmButton: false,
            timer: 1500 // ????? ??? ??? ?????
          });


console.log( this.msgres);

          // this.serviceform.reset();
        },
        (error: HttpErrorResponse) => {
          console.error('An error occurred:', error.error);
          this.errorMessage = error.error.data;
        }
      );
    } else {
      return throwError('No token found');
    }
  } else {
    return throwError('Window is not available');
  }
}





  resetForm() {
    this.serviceform.reset();
    this.serviceform.markAsPristine();
    this.serviceform.markAsUntouched();
  }

  }





