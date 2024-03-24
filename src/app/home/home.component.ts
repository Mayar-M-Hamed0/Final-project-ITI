import { log } from 'console';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import Swal from 'sweetalert2';
import { LoginService } from '../services/login.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLinkActive,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  resmassge :any =''
  gameForm: FormGroup;
  goToTop(){
    window.scrollTo({top:0,behavior:'smooth'})
  }
  login:any =''
constructor(private http:HttpClient,private auth:LoginService){

  this.gameForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      
    ]), 
  
  phone: new FormControl('', [
    Validators.required,
    Validators.pattern(/^(010|011|012|015)\d{8}$/)
]),
      message: new FormControl('', [
     Validators.required,
     Validators.minLength(8),
   ]),

 });
this.auth.auth().subscribe(res=>{

  this.login = res
})



}


handelForm() {
  this.http.post('http://127.0.0.1:8000/api/PostContact', this.gameForm.value).subscribe(
    (res) => {
      // إظهار الـ sweet alert عندما يكون الرد ناجحًا
      Swal.fire({
        title: 'تم الإرسال بنجاح!',
        icon: 'success',
        allowOutsideClick: false
      }).then((result) => {
        if (result.isConfirmed) {
       
          this.gameForm.reset()
        }
      });
      this.resmassge = "Thank you, we will contact you soon";

      
    },
    (error) => {
     
      Swal.fire('حدث خطأ ما!', 'يرجى المحاولة مرة أخرى.', 'error');
      console.error('حدث خطأ:', error);
    }
  );
}
}



