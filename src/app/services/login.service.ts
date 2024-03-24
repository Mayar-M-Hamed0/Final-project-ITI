import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { map,Observable, throwError,catchError  } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private HttpClient_:HttpClient) { 


  
  }

  auth(): Observable<any> {

    if (typeof window !== 'undefined') {
     
      const token: any = localStorage.getItem('token');
      if (token) {
        const headers = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        });
    
        return this.HttpClient_.get('http://127.0.0.1:8000/api/user', { headers: headers });
      } else {
        return throwError('No token found');
      }
    } else {
      return throwError('Window is not available');
    }
    
 
  }




  isAdmin(): Observable<boolean> {
    if (typeof window !== 'undefined') {
      const token = sessionStorage.getItem('token');
      if (token) {
        const headers = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        });
  
        return this.HttpClient_.get<any>('http://127.0.0.1:8000/api/user', { headers });
      } else {
        return throwError('No token found');
      }
    } else {
      return throwError('Window is not available');
    }
  }
  
 



  }

