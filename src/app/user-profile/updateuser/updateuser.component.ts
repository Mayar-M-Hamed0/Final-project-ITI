import { HttpClient ,HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-updateuser',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLinkActive,RouterLink,CommonModule],
  templateUrl: './updateuser.component.html',
  styleUrl: './updateuser.component.css'
})
export class UpdateuserComponent {
  gameForm: FormGroup;

response :any = ''

resupdate :any= ' '
errorData: any; // تفترض وجود هذه المتغيرات في كومبوننتك

errorMessage:any =''


     token = sessionStorage.getItem('token')
     
 httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + this.token 
  })
};



  constructor(


 private http:HttpClient
,private router: Router,service:LoginService

  ) {
    this.gameForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        
      ]), 
      image: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        
      ]), 
        
     email: new FormControl('', [
       Validators.required,
       Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)
        ]),
        phone: new FormControl('', [
          Validators.required,
          Validators.pattern(/^(015|010|011|012)[0-9]{8}$/) // النمط لرقم الهاتف المصري
        ]),  
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(8),
        ]),

   });

   service.auth().subscribe(res=>{
this.response = res
   })


 }

 handelForm() {


  
  const token = sessionStorage.getItem('token');


  if (token) {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      })
    };


    this.http.put('http://127.0.0.1:8000/api/users/2', this.gameForm.value, httpOptions).subscribe(
      (res) => {
        this.resupdate = res;
        
console.log(this.resupdate);

       
      },
      (error: HttpErrorResponse) => {
        console.error('An error occurred:', error.error);
        this.errorMessage = error.error.data; 
    }
    );
  } else {

    console.log('Token not found in sessionStorage');
  }
}



}
