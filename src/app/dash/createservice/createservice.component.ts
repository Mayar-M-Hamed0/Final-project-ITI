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
  cars: { key: number; value: string }[] = [];
  services: { key: number; value: string }[] = [];


  userImageUrl:any = '';
  userImageFile:any = ' ';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.serviceform = this.fb.group({
      name: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern(/^(010|011|012|015)\d{8}$/)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      location: ['', [Validators.required]],
      image: ['', [Validators.required]], // حقل الصورة
      rating: ['', [Validators.required]],
      working_hours: ['', [Validators.required]],
      working_days: ['', [Validators.required]],
      services: ['', [Validators.required]],
      cars: ['', [Validators.required]],
    });



    this.cars = [
      { key: 1, value: 'KIA' },
      { key: 2, value: 'MAZDA' },
      { key: 3, value: 'TOYOTA' },
      { key: 4, value: 'SKODA' },
      { key: 5, value: 'SSANGYONG' },
      { key: 6, value: 'Ford' },
      { key: 7, value: 'BMW' },
      { key: 8, value: 'LADA' },
      { key: 9, value: 'CITROËN' },
      { key: 10, value: 'SUZUKI' },
      { key: 11, value: 'SEAT' },
      { key: 12, value: 'RENAULT' },
      { key: 13, value: 'HYUNDAI' },
      { key: 14, value: 'NISSAN' },
      { key: 15, value: 'VOLVO' },
      { key: 16, value: 'BYD' },
      { key: 17, value: 'HONDA' },

    ];

    this.services= [
      { key: 1, value: 'Mechanical' },
      { key: 2, value: 'Electricity' },
      { key: 3, value: 'Suspensions' },
      { key: 4, value: 'Car Denting' },
      { key: 5, value: 'paints' },
      { key: 6, value: 'brakes' },
      { key: 7, value: 'lubricants' },
      { key: 8, value: 'Tires and batteries' },
      { key: 9, value: 'gear box' },
      { key: 10, value: 'A/C/Charge' },
      { key: 11, value: 'Radiator' },
      { key: 12, value: 'Fast Service' },
      { key: 13, value: 'Computer detection' },
      { key: 14, value: 'Car wash and care' },
      { key: 15, value: 'Insurance companies' },
      { key:16,
        value: 'Oil Change Offers + Preventive Maintenance',
      },
      { key: 17, value: 'El-Mikaneeky BOSCH' },
      { key: 18 , value: 'Labor fees Discount' },
    ];


  }

  
  onFileSelected(event:any){
    this.userImageUrl = URL.createObjectURL(event.target.files[0]);
    this.userImageFile = event.target.files[0];
  }





  handelForm(e:any) {
    e.preventDefault();

let formData = new FormData();
formData.append('image',this.userImageFile);
formData.append('name', this.serviceform.value.name);
formData.append('phone', this.serviceform.value.phone);
formData.append('description', this.serviceform.value.description);
formData.append('location', this.serviceform.value.location);
formData.append('rating', this.serviceform.value.rating);
formData.append('working_hours', this.serviceform.value.working_hours);
formData.append('working_days', this.serviceform.value.working_days);

this.serviceform.value.services.forEach((service: { key: number, value: string }) => {
  formData.append('services[]', String(service.key));
});

this.serviceform.value.cars.forEach((car: { key: number, value: string }) => {
  formData.append('cars[]', String(car.key));
});




console.log();
console.log(this.serviceform.value);





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


          this.serviceform.reset();
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





