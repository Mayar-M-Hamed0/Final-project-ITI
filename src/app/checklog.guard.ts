// auth.guard.ts

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from './services/login.service';

@Injectable({
  providedIn: 'root'
})
export class check implements CanActivate {

  constructor(private authService: LoginService, private router: Router) {}

  canActivate(): boolean {

    const token = sessionStorage.getItem('token');

    if (token) {
      return true;
     
   
    }
    return false;
    
   
  }
}
