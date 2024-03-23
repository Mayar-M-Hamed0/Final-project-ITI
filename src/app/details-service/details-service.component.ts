import { Component, NgModule } from '@angular/core';
import { HostListener } from '@angular/core';
import { ActivatedRoute, RouterLink,Params } from '@angular/router';
import { RatingStarsComponent } from '../rating-stars/rating-stars.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { CommonModule, NgFor } from '@angular/common';
import {comments} from '../../comments'
import { ServicesService } from '../services/services.service';
import Swal from 'sweetalert2';
import { HttpClient,HttpHeaders,HttpErrorResponse  } from '@angular/common/http';
import {  throwError } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterPipe } from '../filter.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { readdir } from 'fs';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
@Component({
  selector: 'app-details-service',
  standalone: true,
  imports: [FormsModule,RouterLink,FontAwesomeModule,RatingStarsComponent,FilterPipe,CommonModule,NgxPaginationModule],
  templateUrl: './details-service.component.html',
  styleUrl: './details-service.component.css'
})
export class DetailsServiceComponent {
  p: number = 1;
  Username!:string;
data:any =  []
id:any
searchtext:any;

crntpage:any
datafromapi : any = [];

  constructor(private serv:ServicesService ,private HttpClient_:HttpClient, private route:ActivatedRoute, private resevedata:ServicesService,private router: Router,private loginService:LoginService ){
    this.id = this.route.snapshot.paramMap.get("id")
    this.serv.getsinglepage(this.id).subscribe(res=>{


    this.data = res;
      console.log(this.data)

  

    })
  }






  goToTop(){
    window.scrollTo({top:0,behavior:'smooth'})
  }

  faStar = faStar;
  rating = 0;
  setRating(value: number){
    this.rating = value;
  }




  comments:any = comments

 // comments:any = comments



  posts: any;
  countlike: number = 0
  countdislike: number = 0


///

service_center_id!:number;
Description!:number;
date!:string;

datauser: any = ''

headers:any =''

  ngOnInit() {
    this.serv.getlike().subscribe((value) => this.countlike = value)
    this.serv.getdislike().subscribe((value) => this.countdislike = value)

    this.serv.getAllposts().subscribe((res) => { this.posts = res });

      this.route.params.subscribe((params:Params)=>{this.service_center_id=params['id']})
      this.loginService.auth().subscribe(
        (data) => {
        this.datauser=data
        })



  }


  comment!: string
  CommentId!: number
  Date!: Date
  name!: string
  image!: string
  
  savecomment() {


    let inputsdata = {
      user_id: this.datauser.id,
      service_center_id: this.service_center_id,
      Description: this.Description
    };

 if (typeof window !== 'undefined') {
    const token: any = sessionStorage.getItem('token');
    if (token) {

      this.headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });

      return this.HttpClient_.post('http://127.0.0.1:8000/api/reviews',inputsdata,{ headers: this.headers }).subscribe({
        next: (res: any) => {
          console.log(res, 'res');
        },
        error: (err: any) => {
  
          if (err.status === 401) {
         
            Swal.fire({
              icon: 'warning',
              title: 'Please Login First ',
              showConfirmButton: true,
              confirmButtonText: ' Login',
              allowOutsideClick: false,
              allowEscapeKey: false,
                 timer: 3000 // يغلق تلقائيا بعد 3 ثواني
            }).then((result) => {
              if (result.isConfirmed) {
                this.router.navigateByUrl('/login');
              }
            });
          } else {
            console.error('حدث خطأ غير معروف:', err.error);
          }
        }
      });
    
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'Please Login First ',
        showConfirmButton: true,
        confirmButtonText: ' Login',
        allowOutsideClick: false,
        allowEscapeKey: false,
           timer: 3000 // يغلق تلقائيا بعد 3 ثواني
      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigateByUrl('/login');
        }
      });
      return throwError('No token found');
    }
  } else {
    return throwError('Window is not available');
  }
    
  
 

    return "h";
  }






  deletecomment(event: any, commentid: any) {
    if (typeof window !== 'undefined') {
      const token: any = sessionStorage.getItem('token');
      if (token) {
        this.headers = new HttpHeaders({
          'Authorization': `Bearer ${token}`
        });
        Swal.fire({
          title: 'Are you sure?',
          text: 'You are about to delete this comment.',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
            this.HttpClient_.delete('http://127.0.0.1:8000/api/reviews/' + commentid, { headers: this.headers }).subscribe((res: any) => {
              this.serv.getAllposts().subscribe((res) => { console.log(res) });
            });
          }
        });
      } else {
        Swal.fire({
          icon: 'warning',
          title: 'Please Login First ',
          showConfirmButton: true,
          confirmButtonText: ' Login',
          allowOutsideClick: false,
          allowEscapeKey: false,
          timer: 3000
        }).then((result) => {
          if (result.isConfirmed) {
            this.router.navigateByUrl('/login');
          }
        });
      }
    }
  }
  


  get totalPosts(): number {
    return this.posts.length;
  }



  updateRating(newRating: number) {
    this.rating = newRating;
  }
}


