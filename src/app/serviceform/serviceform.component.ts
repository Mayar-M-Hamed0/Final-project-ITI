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
  model: string[] = [];
  tag: { key: string; value: string }[] = [];
  constructor(private fb: FormBuilder, private sr: ServicesService) {
    this.serviceform = new FormGroup({
      servicename: new FormControl('', [Validators.required]),
      Category: new FormControl('', [Validators.required]),
      servicedetails: new FormControl('', [Validators.required]),
      location: new FormControl('', [Validators.required]),
      imageurl: new FormControl('', [Validators.required]),
      services: new FormControl('', [Validators.required]),
      rate: new FormControl('', [Validators.required]),
      Workingtime: new FormControl('', [Validators.required]),
      Workingdays: new FormControl('', [Validators.required]),
      tag: new FormControl('', Validators.required), 
      model: new FormControl('', Validators.required),
    });


    this.model = [
      'KIA',
      'MAZDA',
      'TOYOTA',
      'SKODA',
      'SSANGYONG',
      'Ford',
      'BMW',
      'LADA',
      'CITROËN',
      'SUZUKI',
      'SEAT',
      'RENAULT',
      'HYUNDAI',
      'NISSAN',
      'VOLVO',
      'HONDA',
      'BYD',
    ];
  
    this.tag= [
      { key: 'Mechanical', value: 'Mechanical' },
      { key: 'Electricity', value: 'Electricity' },
      { key: 'Suspensions', value: 'Suspensions' },
      { key: 'Car Denting', value: 'Car Denting' },
      { key: 'paints', value: 'paints' },
      { key: 'brakes', value: 'brakes' },
      { key: 'lubricants', value: 'lubricants' },
      { key: 'Tires and batteries', value: 'Tires and batteries' },
      { key: 'gear box', value: 'gear box' },
      { key: 'A/C Charge', value: 'A/C/Charge' },
      { key: 'Radiator', value: 'Radiator' },
      { key: 'Fast Service', value: 'Fast Service' },
      { key: 'Computer detection', value: 'Computer detection' },
      { key: 'Car wash and care', value: 'Car wash and care' },
      { key: 'Insurance companies', value: 'Insurance companies' },
      {
        key: 'Oil Change Offers + Preventive Maintenance',
        value: 'Oil Change Offers + Preventive Maintenance',
      },
      { key: 'El-Mikaneeky BOSCH', value: 'El-Mikaneeky BOSCH' },
      { key: 'Labor fees Discount', value: 'Labor fees Discount' },
    ];
  }



 

  handelForm() {
 
    this.sr.pushdata(this.serviceform.value).subscribe();
  }
  resetForm() {
    this.serviceform.reset();
    this.serviceform.markAsPristine();
    this.serviceform.markAsUntouched();
  }
}