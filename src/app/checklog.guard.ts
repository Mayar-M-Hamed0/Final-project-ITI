// auth.guard.ts

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from './services/login.service';

@Injectable({
  providedIn: 'root'
})
export class check implements CanActivate {

  constructor(private authService: LoginService, private router: Router) {}

  canActivate(): any {
    if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token');

    if (token) {
      return true;
     
   
    }
    return false;
    
   
  }
}
}
