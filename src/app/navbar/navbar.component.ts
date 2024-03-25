import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import {Router  , RouterLink, RouterLinkActive } from '@angular/router';
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

  constructor(private loginService:LoginService, private router:Router) { 
   
  
  }

  ngOnInit(): void {
    this.loginService.auth().subscribe(
      (data) => {
      this.datauser=data
    
      }
     
      
    );
  
  }

  
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
    window.location.reload()
  }
  



  }




