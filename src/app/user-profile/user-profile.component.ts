import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
 
  datauser :any = ''





  constructor(private datalogin:LoginService ){
  
  
  }

;  


}

 
  


