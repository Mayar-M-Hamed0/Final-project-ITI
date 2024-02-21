import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-serviceform',
  standalone: true,
  imports: [ReactiveFormsModule ,NgFor , FormsModule ,NgbAlertModule],
  templateUrl: './serviceform.component.html',
  styleUrl: './serviceform.component.css'
})
export class ServiceformComponent {
  serviceform: FormGroup;

 
  constructor(private fb: FormBuilder,private sr:ServicesService) {
    this.serviceform = new FormGroup({
      servicename: new FormControl('', [
        Validators.required,
      ]), 
      companyName: new FormControl('',[
        Validators.required,
      ]),
      servicedetails: new FormControl('',[
        Validators.required,
      ]),
      descrption: new FormControl('',[
        Validators.required
      ]),
      location : new FormControl('',[
        Validators.required
      ]) ,
      imageurl : new FormControl('',[
        Validators.required
      ]) ,
      services : new FormControl('',[
        Validators.required
      ]),
      rate : new FormControl('',[
        Validators.required
      ]),
      Workingtime : new FormControl('',[
        Validators.required
      ]),
      Workingdays : new FormControl('',[
        Validators.required
      ]),
      tag: this.fb.array([], Validators.required), // FormArray للـ models

      model: this.fb.array([], Validators.required) // Use FormArray for multiple values
    });
  }



  get modelArray(): FormArray {
    return this.serviceform.get('model') as FormArray;
  }

  get tagArray(): FormArray {
    return this.serviceform.get('tag') as FormArray;
  }

  modelz = [
    { key: ' KIA', value: 'KIA' },
    { key: 'MAZDA', value: 'MAZDA' },
    { key: 'TOYOTA', value: 'TOYOTA' },
    { key: 'SKODA', value: 'SKODA' },
    { key: 'SSANGYONG', value: 'SSANGYONG' },
    { key: ' Ford', value: ' Ford' },
    { key: 'BMW', value: 'BMW' },
    { key: 'LADA', value: 'LADA' },
    { key: 'CITROËN', value: 'CITROËN' },
    { key: 'SUZUKI', value: 'SUZUKI' },
    { key: 'SEAT', value: 'SEAT' },
    { key: 'RENAULT', value: 'RENAULT' },
    { key: 'HYUNDAI', value: 'HYUNDAI' },
    { key: ' NISSAN', value: ' NISSAN' },
    { key: 'VOLVO', value: 'VOLVO' },
    { key: 'HONDA', value: 'HONDA' },
    { key: 'BYD', value: 'BYD' }
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
    { key: 'A/C Charge', value: 'A/C Charge' },
    { key: 'Radiator', value: 'Radiator' },
    { key: 'Fast Service', value: 'Fast Service' },
    { key: 'Computer detection', value: 'Computer detection' },
    { key: 'Car wash and care', value: 'Car wash and care' },
    { key: 'Insurance companies', value: 'Insurance companies' },
    { key: 'Oil Change Offers + Preventive Maintenance', value: 'Oil Change Offers + Preventive Maintenance' },
    { key: 'El-Mikaneeky BOSCH', value: 'El-Mikaneeky BOSCH' },
    { key: 'Labor fees Discount', value: 'Labor fees Discount' }
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












  
    
  handelForm(){
    console.log(this.serviceform.value);

    this.sr.pushdata(this.serviceform.value).subscribe();
  }
  resetForm() {
    this.serviceform.reset();
    this.serviceform.markAsPristine();
    this.serviceform.markAsUntouched();
  }


  }
  

  

