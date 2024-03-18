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
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map,Observable, throwError,catchError  } from 'rxjs';
@Component({
  selector: 'app-createservice',
  standalone: true,
  imports: [ ReactiveFormsModule,
    
    NgFor,
    FormsModule,
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
  serviceform: FormGroup;
  model: { key: number; value: string }[] = [];
  services: { key: number; value: string }[] = [];
  msgres:any=''
  constructor(private fb: FormBuilder, private http:HttpClient) {
    this.serviceform = new FormGroup({
      name: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      Category: new FormControl('', [Validators.required]),
      servicedetails: new FormControl('', [Validators.required]),
      location: new FormControl('', [Validators.required]),
      imageurl: new FormControl('', [Validators.required]),
      rate: new FormControl('', [Validators.required]),
      Workingtime: new FormControl('', [Validators.required]),
      Workingdays: new FormControl('', [Validators.required]),
      services: new FormControl('', Validators.required), 
      model: new FormControl('', Validators.required),
    });


    this.model = [
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



  

  handelForm() {
if (typeof window !== 'undefined') {
     
  const token: any = sessionStorage.getItem('token');
  if (token) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.post('http://127.0.0.1:8000/api/service-center/',
    this.serviceform.value, { headers: headers }).subscribe(res=>{

      console.log(res);
      
    });
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




 
