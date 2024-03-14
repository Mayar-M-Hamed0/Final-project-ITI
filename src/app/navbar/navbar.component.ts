import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { log } from 'console';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  datauser: any = '';

  constructor(private loginService:LoginService) { 
   
  
  }

  ngOnInit(): void {
    this.loginService.auth().subscribe(
      (data) => {
      this.datauser=data
      }
    );
  
  }

  
  logout() {
    sessionStorage.removeItem('token');
    setTimeout(() => {
      window.location.reload();
    }, 2000); // بعد ثانيتين (2000 مللي ثانية)
  }
  



  }




