import { LoginService } from './../../services/login.service';

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
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgSelectModule } from '@ng-select/ng-select';
import { HttpClient,HttpHeaders,HttpErrorResponse  } from '@angular/common/http';
import {  throwError } from 'rxjs';
@Component({
  selector: 'app-updateuser',
  standalone: true,
  imports: [ NgFor,FormsModule,
    NgbAlertModule,
    CheckboxModule,
    MatCheckboxModule,NgSelectModule,CommonModule,ReactiveFormsModule],
    templateUrl: './updateuser.component.html',
    styleUrl: './updateuser.component.css'
})
export class UpdateuserComponent  {
  errorMessage: any = ''; // تعريف errorMessage كمتغير عام
  fullResponse: any;
  files:any
  msgres:any= ''
  serviceform: FormGroup;

datauser:any = ""

  userImageUrl:any = '';
  userImageFile:any = ' ';

  formdata:any = ''
  constructor(private fb: FormBuilder, private http: HttpClient,private login:LoginService) {

    this.login.auth().subscribe(res=>{
      this.datauser = res
          })

    this.serviceform = this.fb.group({
      name: ['', [Validators.required,Validators.minLength(3)] ],
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(010|011|012|015)\d{8}$/)
    ]),

    password: ['', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/)]]
    ,
      image: ['', [Validators.required]],
    
    });

  }

  onFileSelected(event:any){
    this.userImageUrl = URL.createObjectURL(event.target.files[0]);
    this.userImageFile = event.target.files[0];

  }



  handelForm(e:any) {
    e.preventDefault(); 

this.formdata = new FormData();
this.formdata.append('image', this.userImageFile);
this.formdata.append('name', this.serviceform.value.name);
this.formdata.append('phone', this.serviceform.value.phone);
this.formdata.append('password',  this.serviceform.value.password);



  if (typeof window !== 'undefined') {
    const token: any = sessionStorage.getItem('token');
    if (token) {

      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
        
      });

this.http.post('http://127.0.0.1:8000/api/users/'+this.datauser.id,this.formdata,{ headers: headers }
      ).subscribe(
        (res) => {
          this.msgres = res;
          this.serviceform.reset();
         
        },
        (error: HttpErrorResponse) => {
          console.error('An error occurred:', error.error);
          this.errorMessage = error.error.data; 
        }
      );
    } else {
      return throwError('No token found');
    }
  } else {
    return throwError('Window is not available');
  }
  return "x";
}
  resetForm() {
    this.serviceform.reset();
    this.serviceform.markAsPristine();
    this.serviceform.markAsUntouched();
  }

  }
 
