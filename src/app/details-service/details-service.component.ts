import { Component, NgModule } from '@angular/core';
import { HostListener } from '@angular/core';
import { ActivatedRoute, RouterLink,Params } from '@angular/router';
import { RatingStarsComponent } from '../rating-stars/rating-stars.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { CommonModule, NgFor } from '@angular/common';
import {comments} from '../../comments'
import { ServicesService } from '../services/services.service';

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

data:any =  []
id:any
searchtext:any;

crntpage:any
datafromapi : any = [];

  constructor(private serv:ServicesService , private route:ActivatedRoute, private resevedata:ServicesService,private router: Router,private loginService:LoginService ){
    this.id = this.route.snapshot.paramMap.get("id")
    this.serv.getsinglepage(this.id).subscribe(res=>{


    this.data = res; 


    this.resevedata.getdata().subscribe(res2 => {

      this.datafromapi = res2;
       console.log("this is the response of api",this.datafromapi,this.searchtext)
    })

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

//

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
  savecomment() {
    var inputsdata = {

  
      user_id:this.datauser.id,
         service_center_id:this.service_center_id,
        Description:this.Description
  
    }
    this.serv.savecomment(inputsdata).subscribe({
      next: (res: any) => {
        console.log(res, 'res')
      }
    });
  }

  deletecomment(event: any, commentid: any) {

      this.serv.destroycomment(commentid).subscribe((res: any) => {
        this.serv.getAllposts().subscribe((res) => { console.log(res) });
     
      })
    
  
  }





  get totalPosts(): number {
    return this.posts.length;
  }


  
  updateRating(newRating: number) {
    this.rating = newRating;
  }
}

