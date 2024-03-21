import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {NgForm} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ServicesService } from '../services/services.service';
import { NgxPaginationModule } from 'ngx-pagination';
@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule,RouterLink,NgxPaginationModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {

  datauser :any = ''
  orders :any = ''
  archive :any = ''
  crntpage:any;
  id!:number;





  constructor(private datalogin:LoginService,private service:ServicesService ){}




ngOnInit(){
  this.datalogin.auth().subscribe(res=>{
    this.datauser= res;
    console.log( this.datauser);
    
    this.service.getordersforuser(this.datauser['id']).subscribe(res=>{this.orders=res; console.log(this.orders)})
    this.service.getarchivedforuser(this.datauser['id']).subscribe(res=>{this.archive=res; console.log(this.orders)})
  })
}
ondelete(id:number){
  this.service.forcedeleteorder(id).subscribe({
    next:res=>{

      setTimeout(() => {

       window.location.reload();
      }, 2000);}
  })
}

}





