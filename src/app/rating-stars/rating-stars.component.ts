import { CommonModule } from '@angular/common';
import { Component,Input,OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-rating-stars',
  standalone: true,
  imports: [FontAwesomeModule,CommonModule],
  templateUrl: './rating-stars.component.html',
  styleUrl: './rating-stars.component.css'
})
export class RatingStarsComponent  {
  
  faStar = faStar;
  @Input() actualRating:number = 0;
}

