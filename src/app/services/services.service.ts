import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private HttpClient_:HttpClient){

  }
  
  pushdataall(){
   return this.HttpClient_.get(`https://fakestoreapi.com/products`)
  
  }
  



}
