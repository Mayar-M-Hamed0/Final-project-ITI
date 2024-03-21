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
  formData:any = ''
  constructor(private fb: FormBuilder, private sr: ServicesService , private http:HttpClient,private route: ActivatedRoute) {
    this.serviceform = new FormGroup({
      name: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required, Validators.pattern(/^(010|011|012|015)\d{8}$/)]),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(10)
    ]),
      location: new FormControl('', [Validators.required]),
      rating: new FormControl('', [Validators.required]),
      working_hours: new FormControl('', [Validators.required]),
      working_days: new FormControl('', [Validators.required]),
      services: new FormControl('', Validators.required), 
      cars: new FormControl('', Validators.required),
      image: new FormControl('', [Validators.required]),
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



    this.id = this.route.snapshot.params['id'];

    
    this.http.get('http://127.0.0.1:8000/api/center/'+this.id).subscribe(res=>{
this.oldnameforupdateservice = res


    })
  }




  onFileSelected(event:any){
    this.userImageUrl = URL.createObjectURL(event.target.files[0]);
    this.userImageFile = event.target.files[0];
  }



 

  handelForm(e:any) {
    e.preventDefault();
    this.formData = new FormData();
    this.formData.append('image',this.userImageFile);
    this.formData.append('name', this.serviceform.value.name);
    this.formData.append('phone', this.serviceform.value.phone);
    this.formData.append('description', this.serviceform.value.description);
    this.formData.append('location', this.serviceform.value.location);
this.formData.append('rating', this.serviceform.value.rating);
this.formData.append('working_hours', this.serviceform.value.working_hours);
this.formData.append('working_days', this.serviceform.value.working_days);
this.formData.append('services[]', this.serviceform.value.services);
this.formData.append('cars[]', this.serviceform.value.cars);



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
        this.formData,
          { headers: headers }
        ).subscribe(
          (res) => {
            this.msgres = res;
           console.log(res);
           
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