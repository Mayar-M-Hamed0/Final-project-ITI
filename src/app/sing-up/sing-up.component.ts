import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sing-up',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLinkActive,RouterLink],
  templateUrl: './sing-up.component.html',
  styleUrl: './sing-up.component.css'
})
export class SingUpComponent { 
  gameForm: FormGroup;

  response: any = '';

  constructor(

 private http:HttpClient
,private router: Router

  ) {
    this.gameForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        
      ]), 
    
     email: new FormControl('', [
       Validators.required,
       Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)
        ]),
     password: new FormControl('', [
       Validators.required,
       Validators.minLength(8),
     ]),

   });
 }
 handelForm() {
  this.http.post('http://127.0.0.1:8000/api/register/', this.gameForm.value).subscribe(
    res => {
      this.response = res;
      console.log(this.response);
      if (this.response && this.response.status === 201) {
      
        this.router.navigate(['/login']);
      }
    }
  );
}


 
}
