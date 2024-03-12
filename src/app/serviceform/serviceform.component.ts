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

@Component({
  selector: 'app-serviceform',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgFor,
    FormsModule,
    NgbAlertModule,
    CheckboxModule,
    MatCheckboxModule,
  ],
  templateUrl: './serviceform.component.html',
  styleUrl: './serviceform.component.css',
})
export class ServiceformComponent {
  serviceform: FormGroup;

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
      tag: this.fb.array([], Validators.required), 
      model: this.fb.array([], Validators.required),
    });
  }

  get modelArray(): FormArray {
    return this.serviceform.get('model') as FormArray;
  }

  get tagArray(): FormArray {
    return this.serviceform.get('tag') as FormArray;
  }
  modelz = [
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

  tagz = [
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

  handleCheckboxChange(event: any, value: any, formArrayName: string) {
    const isChecked = event.target.checked;
    const formArray = this.serviceform.get(formArrayName) as FormArray;

    if (isChecked) {
      // If checkbox is checked, add the value to the FormArray
      formArray.push(this.fb.control(value));
    } else {
      // If checkbox is unchecked, remove the value from the FormArray
      const index = formArray.value.indexOf(value);
      if (index !== -1) {
        formArray.removeAt(index);
      }
    }
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