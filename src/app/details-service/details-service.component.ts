import { Component } from '@angular/core';
import { HostListener } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { RatingStarsComponent } from '../rating-stars/rating-stars.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { NgFor } from '@angular/common';
import {comments} from '../../comments'
import { ServicesService } from '../services/services.service';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-details-service',
  standalone: true,
  imports: [RouterLink,FontAwesomeModule,RatingStarsComponent,NgFor,FormsModule],
  templateUrl: './details-service.component.html',
  styleUrl: './details-service.component.css'
})
export class DetailsServiceComponent {
data:any =  []
id:any

  constructor(private serv:ServicesService , private route:ActivatedRoute){
    this.id = this.route.snapshot.paramMap.get("id")
    this.serv.getsinglepage(this.id).subscribe(res=>{


    this.data = res; 

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




  ngOnInit() {
    this.serv.getlike().subscribe((value) => this.countlike = value)
    this.serv.getdislike().subscribe((value) => this.countdislike = value)

    this.serv.getAllposts().subscribe((res) => { this.posts = res });

  }

  comment!: string
  CommentId!: number
  Date!: Date
  Username!: string
  savecomment() {
    var inputsdata = {

      CommentId: '',
      Date: '',
      comment: this.comment,
      Username: this.Username,
    }
    this.serv.savecomment(inputsdata).subscribe({
      next: (res: any) => {
        console.log(res, 'res')
      }
    });
  }

  deletecomment(event: any, commentid: any) {

    if (confirm('Are you sure you want delete comment?')) {
      event.target.innerTex = "Deleting..."
      this.serv.destroycomment(commentid).subscribe((res: any) => {
        this.serv.getAllposts().subscribe((res) => { console.log(res) });

      })
    }
  }



  decrese() {
    if (this.countdislike > 0) {
      this.serv.Updatadislikecount(this.countdislike - 1)

    }

  }
  increse() {
    this.serv.Updatalikecount(this.countlike + 1)
  }


  updateRating(newRating: number) {
    this.rating = newRating;
  }
}



