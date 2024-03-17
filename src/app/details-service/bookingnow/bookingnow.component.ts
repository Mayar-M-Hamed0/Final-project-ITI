import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Params, RouterLink, RouterLinkActive } from '@angular/router';
import { ServicesService } from '../../services/services.service';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { CheckboxModule } from 'primeng/checkbox';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatCheckboxModule } from '@angular/material/checkbox';
@Component({
  selector: 'app-bookingnow',
  standalone: true,
  imports: [ReactiveFormsModule,NgbAlertModule,CheckboxModule,NgSelectModule,MatCheckboxModule],
  templateUrl: './bookingnow.component.html',
  styleUrl: './bookingnow.component.css'
})
export class BookingnowComponent implements OnInit {
  bookingnow: FormGroup;
  id:unknown;
  model: { key: number; value: string }[] = [];
  services: { key: string; value: string }[] = [];
  viewdata:unknown = []
  constructor(private formBuilder: FormBuilder  ,private dataService:ServicesService ,private route:ActivatedRoute) {
    this.bookingnow = this.formBuilder.group({

      phone: ['', [Validators.required, Validators.pattern(/^(010|011|012|015)\d{8}$/)]],
      textarea: ['', [Validators.minLength(5), Validators.maxLength(90)]],
      date: ['', Validators.required]
    });



    this.dataService.getdata().subscribe(res=>{

this.viewdata = res ;

    })

    console.log(this.viewdata);
    this.model = [
      { key: 1, value: 'KIA' },
      { key: 2, value: 'MAZDA' },
      { key: 3, value: 'TOYOTA' },
      { key: 4, value: 'SKODA' },
      { key: 5, value: 'SSANGYONG' },
      { key: 6, value: 'Ford' },
      { key: 7, value: 'BMW' },
      { key: 8, value: 'LADA' },
      { key: 9, value: 'CITROËN' },
      { key: 10, value: 'SUZUKI' },
      { key: 11, value: 'SEAT' },
      { key: 12, value: 'RENAULT' },
      { key: 13, value: 'HYUNDAI' },
      { key: 14, value: 'NISSAN' },
      { key: 15, value: 'VOLVO' },
      { key: 16, value: 'BYD' },
      { key: 17, value: 'HONDA' },

    ];
    this.services= [
      { key: 'Mechanical', value: 'Mechanical' },
      { key: 'Electricity', value: 'Electricity' },
      { key: 'Suspensions', value: 'Suspensions' },
      { key: 'Car Denting', value: 'Car Denting' },
      { key: 'paints', value: 'paints' },
      { key: 'brakes', value: 'brakes' },
      { key: 'lubricants', value: 'lubricants' },
      { key: 'Tires and batteries', value: 'Tires and batteries' },
      { key: 'gear box', value: 'gear box' },
      { key: 'A/C/Charge', value: 'A/C/Charge' },
      { key: 'Radiator', value: 'Radiator' },
      { key: 'Fast Service', value: 'Fast Service' },
      { key: 'Computer detection', value: 'Computer detection' },
      { key: 'Car wash and care', value: 'Car wash and care' },
      { key: 'Insurance companies', value: 'Insurance companies' },
      { key:'Oil Change Offers + Preventive Maintenance',
        value: 'Oil Change Offers + Preventive Maintenance',
      },
      { key: 'El-Mikaneeky BOSCH', value: 'El-Mikaneeky BOSCH' },
      { key: 'Labor fees Discount' , value: 'Labor fees Discount' },
    ];
  }

  onSubmit() {
    if (this.bookingnow.valid) {
      const formData = this.bookingnow.value;
      this.dataService.pushdata(formData).subscribe();
    } else { /* empty */ }
  }
ngOnInit(){
this.route.params.subscribe((params:Params)=>{this.id=params['id']})
}



}
