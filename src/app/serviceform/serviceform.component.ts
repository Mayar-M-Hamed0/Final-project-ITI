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
import { ServicesService } from '../services/services.service';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'app-serviceform',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgFor,
    FormsModule,
    NgbAlertModule,
    CheckboxModule,
    MatCheckboxModule,NgSelectModule,
  ],
  templateUrl: './serviceform.component.html',
  styleUrl: './serviceform.component.css',
})
export class ServiceformComponent {
  serviceform: FormGroup;
  model: { key: number; value: string }[] = [];
  services: { key: number; value: string }[] = [];
  msgres:any=''
  constructor(private fb: FormBuilder, private sr: ServicesService) {
    this.serviceform = new FormGroup({
      servicename: new FormControl('', [Validators.required]),
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
    this.sr.pushdata(this.serviceform.value).subscribe(
      (res) => {
   
        if (res) {
          window.location.reload();
        } else {
     
          console.log('حدث خطأ في إرسال البيانات');
        }
      },
      (error) => {
        
        console.error('حدث خطأ: ', error);
      }
    );
  }
  

  resetForm() {
    this.serviceform.reset();
    this.serviceform.markAsPristine();
    this.serviceform.markAsUntouched();
  }
}