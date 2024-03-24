import { Component } from '@angular/core';
import { ServicesService } from '../../services/services.service';
import { ActivatedRoute,Params, RouterLink } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-archive',
  standalone: true,
  imports: [NgxPaginationModule,RouterLink],
  templateUrl: './archive.component.html',
  styleUrl: './archive.component.css'
})
export class ArchiveComponent {
  service_center_id!:number
  crntpage:any;
  orders:any;
  constructor(private service:ServicesService , private route:ActivatedRoute){}
  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{this.service_center_id=params['id']})
    console.log(this.service_center_id)
    this.service.getarchived(this.service_center_id).subscribe(res=>{this.orders=res; console.log(res) } )
  }

  
  restore(id:number){
    this.service.restore(id).subscribe({
      next:res=>{

             setTimeout(() => {

              window.location.reload();
             }, 2000);}
    });
  }
}
