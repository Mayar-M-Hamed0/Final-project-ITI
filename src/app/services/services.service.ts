import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private HttpClient_:HttpClient){

  }
  getsinglepage(id:any){
    return this.HttpClient_.get(`https://api-generator.retool.com/5746Su/service/`+id)
   
   }
  
  getdata(){
   return this.HttpClient_.get(`https://api-generator.retool.com/5746Su/service`)
  
  }

  pushdata(formdata:any){
    return this.HttpClient_.post(`https://api-generator.retool.com/5746Su/service`,formdata)
   
   }




}
