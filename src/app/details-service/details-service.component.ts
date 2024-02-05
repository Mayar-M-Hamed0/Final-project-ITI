import { Component } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-details-service',
  standalone: true,
  imports: [],
  templateUrl: './details-service.component.html',
  styleUrl: './details-service.component.css'
})
export class DetailsServiceComponent {
  goToTop(){
    window.scrollTo({top:0,behavior:'smooth'})
  }


  
}
