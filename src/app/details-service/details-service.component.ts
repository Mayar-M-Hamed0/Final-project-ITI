import { Component } from '@angular/core';
import { HostListener } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { RatingStarsComponent } from '../rating-stars/rating-stars.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { NgFor } from '@angular/common';
import {comments} from '../../comments'
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-details-service',
  standalone: true,
  imports: [RouterLink,FontAwesomeModule,RatingStarsComponent,NgFor],
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

}

