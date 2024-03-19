import { Component } from '@angular/core';
import { ServicesService } from '../services/services.service';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

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

  constructor(private route: ActivatedRoute, private singlecomment: ServicesService) { }
  ngOnInit() {
    this.commentid = this.route.snapshot.paramMap.get('id');
    this.singlecomment.getpost(this.commentid).subscribe((res: any) => {
      console.log(res)
      this.commentdes = res
    });
  }
  updatecomment() {

    var inputsdata = {

      id: this.commentdes.id,
      Date: this.commentdes.Date,
      comment: this.commentdes.comment,
      Username: this.commentdes.Username,
    }
    this.singlecomment.updatecomment(inputsdata, this.commentid).subscribe({
      next: (res: any) => {
        console.log(res)
      }
    });
  }
}