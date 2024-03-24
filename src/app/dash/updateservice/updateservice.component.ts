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
import { RouterLink } from '@angular/router';
import { HttpClient,HttpHeaders,HttpErrorResponse  } from '@angular/common/http';
import { map,Observable, throwError,catchError  } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-updateservice',
  standalone: true,
  imports: [ ReactiveFormsModule,
    NgFor,RouterLink,
    FormsModule,
    NgbAlertModule,
    CheckboxModule,
    MatCheckboxModule,NgSelectModule,CommonModule],
  templateUrl: './updateservice.component.html',
  styleUrl: './updateservice.component.css'
})
export class UpdateserviceComponent {
  oldnameforupdateservice:any=''
  serviceform: FormGroup;
  cars: { key: number; value: string }[] = [];
  services: { key: number; value: string }[] = [];
  msgres:any=''
  errorMessage: any = ''; // تعريف errorMessage كمتغير عام
  id:any = ''
  userImageUrl:any = '';
  userImageFile:any = ' ';

  selectedServicesData:any =''
  selectedCarsData:any = ''

  constructor(private fb: FormBuilder, private sr: ServicesService , private http:HttpClient,private route: ActivatedRoute) {
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




    this.id = this.route.snapshot.params['id'];

    
    this.http.get('http://127.0.0.1:8000/api/center/'+this.id).subscribe(res=>{
this.oldnameforupdateservice = res


    })

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

    
    let formData = new FormData();
    formData.append('image',this.userImageFile);
    formData.append('name', this.serviceform.value.name);
    formData.append('price', this.serviceform.value.price);
    formData.append('phone', this.serviceform.value.phone);
    formData.append('description', this.serviceform.value.description);
    formData.append('location', this.serviceform.value.location);
  
    formData.append('cars', JSON.stringify(this.selectedCarsData));
    formData.append('services', JSON.stringify(this.selectedServicesData));
    formData.append('days', JSON.stringify(scheduleData));

    
    const selectedCars = this.serviceform.value.cars;
    this.selectedCarsData = selectedCars.map((selectedCar: any) => {
        const car = this.cars.find(car => car.value === selectedCar);
        return {
            key: car!.key,
            value: car!.value
        };
    });
    
    const selectedServices = this.serviceform.value.services; // تم تغيير اسم المتغير
    this.selectedServicesData = selectedServices.map((selectedService: any) => { // تم تغيير اسم المتغير
        const service = this.services.find(service => service.value === selectedService);
        return {
            key: service!.key,
            value: service!.value
        };
    });

    if (typeof window !== 'undefined') {
      const token: any = sessionStorage.getItem('token');
      if (token) {
        const headers = new HttpHeaders({

          'Authorization': `Bearer ${token}`
        });
  
    
        Swal.fire({
          title: 'تحديث البيانات',
          text: 'سيتم تحديث البيانات الآن. انتظر قليلاً...',
          icon: 'info',
          showCancelButton: false,
          showConfirmButton: false,
          timer: 3000 // يغلق تلقائيا بعد 3 ثواني
          ,
          confirmButtonText: 'نعم، قم بالتحديث!',
          cancelButtonText: 'إلغاء'
        });
  
      this.http.post('http://127.0.0.1:8000/api/service-centerss/'+this.id,
        formData,
          { headers: headers }
        ).subscribe(
          (res) => {
            this.msgres = res;
           console.log(res);
           
           Swal.fire({
            icon: 'success',
            title: 'service Created!',
            showConfirmButton: false,
            timer: 1500 // يمكنك ضبط مدة العرض
          });
          },
          (error: HttpErrorResponse) => {
            console.error('An error occurred:', error.error);
            this.errorMessage = error.error.data; 
          }
        );
      } else {
        // إعادة الخطأ عند عدم وجود الرمز المميز (Token)
        return throwError('No token found');
      }
    } else {
      // إعادة الخطأ عندما لا تكون النافذة متاحة
      return throwError('Window is not available');
    }

    return "x";
  }
  
  

  resetForm() {
    this.serviceform.reset();
    this.serviceform.markAsPristine();
    this.serviceform.markAsUntouched();
  }
}
