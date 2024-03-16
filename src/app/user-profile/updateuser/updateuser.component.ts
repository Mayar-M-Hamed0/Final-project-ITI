import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-updateuser',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLinkActive,RouterLink],
  templateUrl: './updateuser.component.html',
  styleUrl: './updateuser.component.css'
})
export class UpdateuserComponent {
  gameForm: FormGroup;

response :any = ''

resupdate :any= ' '




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
    
     email: new FormControl('', [
       Validators.required,
       Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)
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

 url = 'http://127.0.0.1:8000/api/users/' + this.response.id;
 handelForm() {
  

console.log();
console.log(this.gameForm.value);



console.log(this.url);

//   this.http.put('http://127.0.0.1:8000/api/users/'+this.id,this.gameForm.value ,this.httpOptions).subscribe(res=>{
// this.resupdate = res ;
  



//  })

}
 }

 

  


