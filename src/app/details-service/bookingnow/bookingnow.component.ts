import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ServicesService } from '../../services/services.service';
@Component({
  selector: 'app-bookingnow',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './bookingnow.component.html',
  styleUrl: './bookingnow.component.css'
})
export class BookingnowComponent {
  bookingnow: FormGroup;
  viewdata:any = []
  constructor(private formBuilder: FormBuilder  ,private dataService:ServicesService) {
    this.bookingnow = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      fname: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
      lname: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
      phone: ['', [Validators.required, Validators.pattern(/^(010|011|012|015)\d{8}$/)]],
      textarea: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(90)]],
      date: ['', Validators.required]
    });
  

    this.dataService.getdata().subscribe(res=>{

this.viewdata = res ;

    })

    console.log(this.viewdata);
  }
  
  onSubmit() {
    if (this.bookingnow.valid) {
      const formData = this.bookingnow.value;
      this.dataService.pushdata(formData).subscribe(response => {
    
      });
    } else {
   
    }
  }




}
