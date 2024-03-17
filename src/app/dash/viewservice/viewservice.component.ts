import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ServicesService } from '../../services/services.service';
import { Router } from 'express';

@Component({
  selector: 'app-viewservice',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './viewservice.component.html',
  styleUrl: './viewservice.component.css'
})
export class ViewserviceComponent {
  
searchtext:any;

crntpage:any
datafromapi : any = [];
data:any =  []
id:any
  constructor(private serv:ServicesService , private route:ActivatedRoute, private resevedata:ServicesService,private router: Router){
    this.id = this.route.snapshot.paramMap.get("id")
    this.serv.getsinglepage(this.id).subscribe(res=>{


    this.data = res; 


    this.resevedata.getdata().subscribe(res2 => {

      this.datafromapi = res2;
       console.log("this is the response of api",this.datafromapi,this.searchtext)
    })

    })
  }








}
