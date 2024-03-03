import { Component } from '@angular/core';
import { HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RatingStarsComponent } from '../rating-stars/rating-stars.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { NgFor } from '@angular/common';
import {comments} from '../../comments'

@Component({
  selector: 'app-details-service',
  standalone: true,
  imports: [RouterLink,FontAwesomeModule,RatingStarsComponent,NgFor],
  templateUrl: './details-service.component.html',
  styleUrl: './details-service.component.css'
})
export class DetailsServiceComponent {
  goToTop(){
    window.scrollTo({top:0,behavior:'smooth'})
  }

  faStar = faStar;
  rating = 0;
  setRating(value: number){
    this.rating = value;
  } 


  
  comments:any = comments



  updateRating(newRating: number) {
    this.rating = newRating;
  }
}

