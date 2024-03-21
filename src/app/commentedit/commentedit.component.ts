import { Component } from '@angular/core';
import { ServicesService } from '../services/services.service';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-commentedit',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './commentedit.component.html',
  styleUrl: './commentedit.component.css'
})
export class CommenteditComponent {

  commentid !: any
  commentdes!: any
  service_center_id!:number;
  Description!:number;
  date!:string;
  name!: string
  datauser: any = ''
  
  constructor(private route: ActivatedRoute, private singlecomment: ServicesService,private loginService:LoginService) { }
  ngOnInit() {
    this.commentid = this.route.snapshot.paramMap.get('id');
    this.singlecomment.getpost(this.commentid).subscribe((res: any) => {
      console.log(res)
      this.commentdes = res;
       this.loginService.auth().subscribe(
        (data) => {
        this.datauser=data
        console.log(this.datauser.name)
        })
    });
  }


  updatecomment() {

    var inputsdata = {

      // id: this.commentdes.id,
      // Date: this.commentdes.Date,
      // comment: this.commentdes.comment,
     // name: this.datauser.name,
     Description:this.commentdes.Description
    }
    this.singlecomment.updatecomment(inputsdata, this.commentid).subscribe({
      next: (res: any) => {
        console.log(res)
      
      }
    });
  }
}