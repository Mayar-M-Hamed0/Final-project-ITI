import { Component,ChangeDetectorRef  } from '@angular/core';
import { ServicesService } from '../services/services.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginService } from '../services/login.service';
import { HttpClient,HttpHeaders,HttpErrorResponse  } from '@angular/common/http';
import {  throwError } from 'rxjs';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-commentedit',
  standalone: true,
  imports: [FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './commentedit.component.html',
  styleUrl: './commentedit.component.css'
})
export class CommenteditComponent {
  datauser:any =''
  commentid !: any
  commentdes!: any
  service_center_id!:number;
  Description:any =''
  headers:any = ''
  comment: FormGroup;

  constructor(private cdr: ChangeDetectorRef,private fb: FormBuilder,private HttpClient_:HttpClient,private route: ActivatedRoute, private singlecomment: ServicesService,private loginService:LoginService) { 


    this.comment = this.fb.group({
      Description: ['', [Validators.required]],

    });






  }
  ngOnInit() {
    this.commentid = this.route.snapshot.paramMap.get('id');

    if (typeof window !== 'undefined') {
      const token: any = sessionStorage.getItem('token');
      if (token) {
  
        this.headers = new HttpHeaders({
          'Authorization': `Bearer ${token}`
        });
      
        return this.HttpClient_.get('http://127.0.0.1:8000/api/reviews/'+this.commentid, { headers: this.headers }).subscribe(res=>{


this.commentdes = res


        });

      
      }}



return "";

  

  }
 

  
  updatecomment() {
    this.loginService.auth().subscribe(res=>{
      this.datauser = res
     })
    return this.HttpClient_.put('http://127.0.0.1:8000/api/reviews/'+this.commentid, this.comment.value,{ headers: this.headers }).subscribe(res=>{
      this.commentdes = res;
      this.cdr.detectChanges();
    })

}

}

