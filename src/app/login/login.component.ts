
import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { log } from 'console';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLinkActive,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


 gameForm: FormGroup;
  constructor(
    private http:HttpClient,
    private router:Router
  ) {
    this.gameForm = new FormGroup({

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
 response: any = '';

 handleForm() {
  this.http.post('http://127.0.0.1:8000/api/login/', this.gameForm.value, { withCredentials: false })
    .subscribe((res) => {

      this.response = res;

      if ( this.response.status === 200) {

        sessionStorage.setItem('token', this.response.data.token);
          this.router.navigate(['/']);
          window.location.reload()
      } else {

        this.response = res;
      
      }
    });
}

}
