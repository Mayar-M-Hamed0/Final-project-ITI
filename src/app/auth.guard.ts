import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): any {
    if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token');

    if (token) {
  
      this.router.navigate(['/']);
      return false;
    }

    
    return true;
  }
  }
}
