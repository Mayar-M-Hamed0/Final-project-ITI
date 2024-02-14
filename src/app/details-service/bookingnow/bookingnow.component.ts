import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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
  constructor(private formBuilder: FormBuilder) {
    this.bookingnow = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      fname: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
      lname: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
      phone: ['', [Validators.required, Validators.pattern(/^(010|011|012|015)\d{8}$/)]],
      textarea: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(90)]],
      date: ['', Validators.required]
    });
  }

  submitForm() {
    if (this.bookingnow.valid) {
      // إرسال البيانات هنا
      console.log(this.bookingnow.value);
    } else {
      console.log("Form is invalid");
    }
  }
}
