import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-bookingnow',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './bookingnow.component.html',
  styleUrl: './bookingnow.component.css'
})
export class BookingnowComponent {
  bookingnow: FormGroup;
  constructor() {
    this.bookingnow = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        
      ]), 
      fname: new FormControl('', [
       Validators.required,
       Validators.minLength(3),
       Validators.maxLength(20)
     ]),

     lname: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20)
    ]),

    phone: new FormControl('', [
      Validators.required,
      Validators.pattern(/^(010|011|012|015)\d{8}$/)
]),

textarea: new FormControl('', [
  Validators.required,
  Validators.min(10),
  Validators.maxLength(90)
]),


date: new FormControl('', [
  Validators.required,
  Validators.pattern(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/)
])
   });
 }
 handelForm() {

   console.log(this.bookingnow);
 }
}
