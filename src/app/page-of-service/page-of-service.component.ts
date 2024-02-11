import { Component } from '@angular/core';

import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-page-of-service',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './page-of-service.component.html',
  styleUrl: './page-of-service.component.css'
})
export class PageOfServiceComponent {
  goToTop(){
    window.scrollTo({top:0,behavior:'smooth'})
  }
}
