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
  cars: { key: string }[] = [];
  services: { key: string}[] = [];
  msgres:any=''
  errorMessage: any = ''; // تعريف errorMessage كمتغير عام
  id:any = ''
  userImageUrl:any = '';
  userImageFile:any = ' ';

 

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




    this.id = this.route.snapshot.params['id'];

    
    this.http.get('http://127.0.0.1:8000/api/center/'+this.id).subscribe(res=>{
this.oldnameforupdateservice = res


    })

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
      if (selectedDaysData.length === 0) {
        alert("يرجى اختيار يوم واحد على الأقل.");
    } else {
       
    }
  
  
  }

  onFileSelected(event:any){
    this.userImageUrl = URL.createObjectURL(event.target.files[0]);
    this.userImageFile = event.target.files[0];
  }



 

  handelForm(e:any) {
    e.preventDefault();


  const selectedDaysData = this.schedule
.filter(item => item.day !== "") 
.map(item => ({
  day: item.day,
  startTime: item.startTime,
  endTime: item.endTime
}));


    let mappedCars = this.selectedCars.map(car => {
      return { key: car };
  });
  let mapservices = this.selectedServices.map(car => {
    return { key: car };
});



    let formData = new FormData();
    formData.append('image',this.userImageFile);
    formData.append('name', this.serviceform.value.name);
    formData.append('price', this.serviceform.value.price);
    formData.append('phone', this.serviceform.value.phone);
    formData.append('description', this.serviceform.value.description);
    formData.append('location', this.serviceform.value.location);
    formData.append('days', JSON.stringify(selectedDaysData));
    formData.append('cars', JSON.stringify(mappedCars));
    formData.append('services', JSON.stringify(mapservices))



    if (typeof window !== 'undefined') {
      const token: any = localStorage.getItem('token');
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
     
           
           Swal.fire({
            icon: 'success',
            title: 'service Created!',
            showConfirmButton: false,
            timer: 1500 // يمكنك ضبط مدة العرض
          });

          this.serviceform.reset();
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
