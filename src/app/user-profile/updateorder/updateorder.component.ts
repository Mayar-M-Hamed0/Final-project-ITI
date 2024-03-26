import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { CheckboxModule } from 'primeng/checkbox';
import { OrdersService } from '../../services/orders.service';
import { LoginService } from '../../services/login.service';
import { ServicesService } from '../../services/services.service';
import { ActivatedRoute ,Params, Router} from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-updateorder',
  standalone: true,
  imports: [ReactiveFormsModule,NgbAlertModule,CheckboxModule,NgSelectModule,MatCheckboxModule,CommonModule,FormsModule],
  templateUrl: './updateorder.component.html',
  styleUrl: './updateorder.component.css'
})
export class UpdateOrderComponent implements OnInit {
  bookingnow: FormGroup;
  order:any;
  service_center_id!:number;
  model: { key: string; value: string }[] = [];
  car_services: { key: number; value: string }[] = [];
  phone!:number;
  services!:number;
  car_model!:number;
  date!:string;
  order_details:string='';
  datauser: any = '';
  errors:any;
  response:any;
  msgres:any='';
  id!:number;

  viewdata:unknown = []
  constructor(private router:Router,private formBuilder: FormBuilder,private orderservice:OrdersService,private loginService:LoginService  ,private dataService:ServicesService ,private route:ActivatedRoute) {
    this.bookingnow = this.formBuilder.group({

      phone: ['', [Validators.required, Validators.pattern(/^(010|011|012|015)\d{8}$/)]],
      textarea: ['', [Validators.minLength(5), Validators.maxLength(90)]],
      date: ['', Validators.required],
      services: ['', Validators.required],
      model: ['', Validators.required]
    });



    this.dataService.getdata().subscribe(res=>{

this.viewdata = res ;

    })

    console.log(this.viewdata);
    this.model = [
      { key: 'KIA', value: 'KIA' },
      { key: 'MAZDA', value: 'MAZDA' },
      { key: 'TOYOTA', value: 'TOYOTA' },
      { key: 'SKODA', value: 'SKODA' },
      { key: 'SSANGYONG', value: 'SSANGYONG' },
      { key: 'Ford', value: 'Ford' },
      { key: 'BMW', value: 'BMW' },
      { key: 'LADA', value: 'LADA' },
      { key: 'CITROËN', value: 'CITROËN' },
      { key: 'SUZUKI', value: 'SUZUKI' },
      { key: 'SEAT', value: 'SEAT' },
      { key: 'RENAULT', value: 'RENAULT' },
      { key: 'HYUNDAI', value: 'HYUNDAI' },
      { key: 'NISSAN', value: 'NISSAN' },
      { key: 'VOLVO', value: 'VOLVO' },
      { key: 'BYD', value: 'BYD' },
      { key: 'HONDA', value: 'HONDA' },

    ];
    this.car_services= [
      { key: 1, value: 'Mechanical' },
      { key: 2, value: 'Electricity' },
      { key: 3, value: 'Suspensions' },
      { key: 4, value: 'Car Denting' },
      { key: 5, value: 'paints' },
      { key: 6, value: 'brakes' },
      { key: 7, value: 'lubricants' },
      { key: 8, value: 'Tires and batteries' },
      { key: 9, value: 'gear box' },
      { key: 10, value: 'A/C/Charge' },
      { key: 11, value: 'Radiator' },
      { key: 12, value: 'Fast Service' },
      { key: 13, value: 'Computer detection' },
      { key: 14, value: 'Car wash and care' },
      { key: 15, value: 'Insurance companies' },
      { key:16,
        value: 'Oil Change Offers + Preventive Maintenance',
      },
      { key: 17, value: 'El-Mikaneeky BOSCH' },
      { key: 18 , value: 'Labor fees Discount' },
    ];
  }

  onSubmit() {

    let data={
      user_id:this.datauser.id,
      phone:this.phone,
      service_center_id:this.order.data['service_center_id'],
      order_date:this.date,
      car_model:this.car_model,
      services:this.services,
      order_details:this.order_details,
      order_state:"appended",



    }
    console.log("this",data)
    const token: any = localStorage.getItem('token');
  if (token) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
          });

    this.dataService.updateorder(this.id,data,{headers:headers}).subscribe({
      next:res=>{
        this.msgres = res
             setTimeout(() => {

              this.router.navigate(['/user']);
             }, 2000);



            },
      error: (err:any) => {

          this.errors = err.error.errors;

          console.log(this.errors);
      },
  }
  );
  }
  }
ngOnInit(){
  const token: any = sessionStorage.getItem('token');
  if (token) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
          });

this.route.params.subscribe((params:Params)=>{this.id=params['id']})
this.loginService.auth().subscribe(
  (data) => {
  this.datauser=data
  })
  this.dataService.showorder(this.id,{headers:headers}).subscribe((res:any)=>{this.order=res; this.service_center_id=res.data['service_center_id']; console.log(this.service_center_id)

  ;this.dataService.getsinglepage(this.service_center_id).subscribe((res:any)=>{

    res['services'].forEach((element: any) => (
      this.car_services.push(
        {key: element.id, value: element.service_name})));

    res['cars'].forEach((element: any) => (
      this.model.push(
        {key: element.car_name, value: element.car_name})));





  console.log(res)})})
}

}

}
