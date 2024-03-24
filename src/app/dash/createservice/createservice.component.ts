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
  errorMessage: any = ''; // تعريف errorMessage كمتغير عام
  fullResponse: any;
  files:any
  msgres:any= ''
  serviceform: FormGroup;
  cars: { key: string; value: string }[] = [];
  services: { key: string; value: string }[] = [];


  userImageUrl:any = '';
  userImageFile:any = ' ';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.serviceform = this.fb.group({
      name: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern(/^(010|011|012|015)\d{8}$/)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      location: ['', [Validators.required]],
      image: ['', [Validators.required]], // حقل الصورة
  
      price: ['', [Validators.required]],
      services: ['', [Validators.required]],
      cars: ['', [Validators.required]],
      dayss: ['', [Validators.required]],
      startTime: ['', [Validators.required]],
      endTime: ['', [Validators.required]],

    });



    this.cars = [
      { key:'KIA', value: 'KIA' },
      { key: 'MAZDA', value: 'MAZDA' },
      { key: 'TOYOTA', value: 'TOYOTA' },
      { key: 'SKODA' , value: 'SKODA' },
      { key:'SSANGYONG', value: 'SSANGYONG' },
      { key: 'Ford', value: 'Ford' },
      { key: 'BMW' , value: 'BMW' },
      { key: 'LADA', value: 'LADA' },
      { key: 'CITROËN', value: 'CITROËN' },
      { key: 'SUZUKI', value: 'SUZUKI' },
      { key: 'SEAT', value: 'SEAT' },
      { key:'RENAULT', value: 'RENAULT' },
      { key:  'HYUNDAI', value: 'HYUNDAI' },
      { key: 'NISSAN', value: 'NISSAN' },
      { key: 'VOLVO', value: 'VOLVO' },
      { key: 'BYD', value: 'BYD' },
      { key:'HONDA', value: 'HONDA' },

    ];

    this.services= [
      { key: 'Mechanical', value: 'Mechanical' },
      { key: 'Electricity' , value: 'Electricity' },
      { key: 'Suspensions' , value: 'Suspensions' },
      { key: 'Car Denting', value: 'Car Denting' },
      { key: 'paints', value: 'paints' },
      { key: 'brakes', value: 'brakes' },
      { key: 'lubricants', value: 'lubricants' },
      { key: 'Tires and batteries', value: 'Tires and batteries' },
      { key: 'gear box', value: 'gear box' },
      { key: 'A/C/Charge' , value: 'A/C/Charge' },
      { key: 'Radiator', value: 'Radiator' },
      { key: 'Fast Service', value: 'Fast Service' },
      { key: 'Computer detection', value: 'Computer detection' },
      { key: 'Car wash and care', value: 'Car wash and care' },
      { key: 'Insurance companies' , value: 'Insurance companies' },
      { key:'Oil Change Offers + Preventive Maintenance',
        value: 'Oil Change Offers + Preventive Maintenance',
      },
      { key: 'El-Mikaneeky BOSCH', value: 'El-Mikaneeky BOSCH' },
      { key: 'Labor fees Discount' , value: 'Labor fees Discount' },
    ];

    this.schedule = this.days.map(() => ({ day: '', startTime: '', endTime: '' }));

  }




  currentIndex: number = 0;
  days: number[] = [0, 1, 2, 3, 4, 5, 6]; // Days of the week
  schedule: any[] = []; // Array to store schedules

  toggleVisibility(index: number): void {
    if (index < this.days.length - 1) {
      this.currentIndex = index + 1;
    } else {
      // If it's the last day, loop back to the first day
      this.currentIndex = 0;
    }
    const scheduleData = this.schedule.map(item => ({
      day: item.day,
      startTime: item.startTime,
      endTime: item.endTime
    }));
    console.log(scheduleData);
  }
  onFileSelected(event:any){
    this.userImageUrl = URL.createObjectURL(event.target.files[0]);
    this.userImageFile = event.target.files[0];
  }





  handelForm(e:any) {
    e.preventDefault();

    const scheduleData = this.schedule.map(item => ({
      day: item.day,
      startTime: item.startTime,
      endTime: item.endTime
    }));

    const allDaysSelected = this.schedule.every(day => !!day.day);
    if (!allDaysSelected) {
      Swal.fire({
        icon: 'warning',
        title: 'Warning',
        text: 'Please select all days before submitting.'
      });
      return;
    }

let formData = new FormData();
formData.append('image',this.userImageFile);
formData.append('name', this.serviceform.value.name);
formData.append('price', this.serviceform.value.price);
formData.append('phone', this.serviceform.value.phone);
formData.append('description', this.serviceform.value.description);
formData.append('location', this.serviceform.value.location);

formData.append('services[]', this.serviceform.value.services);
formData.append('cars[]', this.serviceform.value.cars);
formData.append('days', JSON.stringify(scheduleData));


  if (typeof window !== 'undefined') {
    const token: any = sessionStorage.getItem('token');
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
            timer: 1500 // يمكنك ضبط مدة العرض
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





