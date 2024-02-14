import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-serviceform',
  standalone: true,
  imports: [ReactiveFormsModule , CommonModule , FormsModule ,NgbAlertModule],
  templateUrl: './serviceform.component.html',
  styleUrl: './serviceform.component.css'
})
export class ServiceformComponent {
  serviceform: FormGroup;

 
  constructor(){
    this.serviceform =new FormGroup({
      servicename: new FormControl('', [
        Validators.required,
      ]), 
      companyName: new FormControl('',[
        Validators.required,
      ]),
      servicedetails: new FormControl('',[
        Validators.required,
      ]),
      serviceprice: new FormControl('',[
        Validators.required
      ]),
      model : new FormControl('',[
        Validators.required
      ]),
      tag : new FormControl('',[
        Validators.required
      ])
    })
  }
  
  handelForm(){
    console.log(this.serviceform);
  }
  resetForm() {
    this.serviceform.reset();
    this.serviceform.markAsPristine();
    this.serviceform.markAsUntouched();
  }
}
