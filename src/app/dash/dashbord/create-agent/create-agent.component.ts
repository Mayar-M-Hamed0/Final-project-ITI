import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders,HttpErrorResponse  } from '@angular/common/http';
import { map,Observable, throwError,catchError  } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-agent',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLinkActive,RouterLink],
  templateUrl: './create-agent.component.html',
  styleUrl: './create-agent.component.css'
})
export class CreateAgentComponent {
  gameForm: FormGroup;
  errorMessage: any = ''; // تعريف errorMessage كمتغير عام

  msgres:any= ''



response :any = ''
  constructor(

 private http:HttpClient
,private router: Router,

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

     role: new FormControl('', [
      Validators.required,
    
      
    ]), 
  

   });
 }



 handelForm() {


  if (typeof window !== 'undefined') {
       
    const token: any = sessionStorage.getItem('token');
    if (token) {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      });
  
      return this.http.post('http://127.0.0.1:8000/api/admins',
        this.gameForm.value,
        { headers: headers }
      ).subscribe(
        (res) => {
          this.msgres = 'Created  Successfully';
          this.gameForm.reset();
       
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Created Successfully',
            confirmButtonText: 'Ok'
          });
     
        
          
        },
        (error: HttpErrorResponse) => {
          console.error('An error occurred:', error.error);
          this.errorMessage = error.error.errors; 
      }
  
      );
    } else {
      // إعادة الخطأ عند عدم وجود الرمز المميز (Token)
      return throwError('No token found');
    }
  } else {
    // إعادة الخطأ عندما لا تكون النافذة متاحة
    return throwError('Window is not available');
  }
  
    }
}
