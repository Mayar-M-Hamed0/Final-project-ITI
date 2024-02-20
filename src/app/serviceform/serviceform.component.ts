import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { ServicesService } from '../services/services.service';
@Component({
  selector: 'app-serviceform',
  standalone: true,
  imports: [ReactiveFormsModule , CommonModule , FormsModule ,NgbAlertModule],
  templateUrl: './serviceform.component.html',
  styleUrl: './serviceform.component.css'
})
export class ServiceformComponent {
  serviceform: FormGroup;

 
  constructor(private ser:ServicesService){
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
      descrption: new FormControl('',[
        Validators.required
      ]),
      model : new FormControl('',[
        Validators.required
      ]),
      tag : new FormControl('',[
        Validators.required
      ])
      ,

      
      location : new FormControl('',[
        Validators.required
      ]) ,
      imageurl : new FormControl('',[
        Validators.required
      ]) ,
      services : new FormControl('',[
        Validators.required
      ])
      ,
      rate : new FormControl('',[
        Validators.required
      ])

      ,
      Workingtime : new FormControl('',[
        Validators.required
      ]) ,
      Workingdays : new FormControl('',[
        Validators.required
      ])

    
    })
    



  }
  

  
  handelForm(){
    console.log(this.serviceform.value);
   
    this.ser.pushdata(this.serviceform.value).subscribe();
  }
  resetForm() {
    this.serviceform.reset();
    this.serviceform.markAsPristine();
    this.serviceform.markAsUntouched();
  }
}
