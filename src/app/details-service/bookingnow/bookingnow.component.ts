import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ServicesService } from '../../services/services.service';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { CheckboxModule } from 'primeng/checkbox';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { OrdersService } from '../../services/orders.service';
import { LoginService } from '../../services/login.service';
import { HttpHeaders } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bookingnow',
  standalone: true,
  imports: [ReactiveFormsModule,NgbAlertModule,CheckboxModule,NgSelectModule,MatCheckboxModule,FormsModule],
  templateUrl: './bookingnow.component.html',
  styleUrl: './bookingnow.component.css'
})
export class BookingnowComponent implements OnInit {
  bookingnow: FormGroup;
  service_center_id!:number;
  model: { key: string; value: string }[] = [];
  car_services: { key: number; value: string }[] = [];
  phone!:number;
  services!:number;
  car_model!:number;
  date!:string;
  order_details:string=' ';
  datauser: any = '';
  errors:any;
  response:any;
  msgres:any='';

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
      { key:16,value: 'Oil Change Offers + Preventive Maintenance'},
      { key: 17, value: 'El-Mikaneeky BOSCH' },
      { key: 18 , value: 'Labor fees Discount' },
    ];
  }

  onSubmit() {
    const token: any = localStorage.getItem('token');
  if (token) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
          });

    let data={
      user_id:this.datauser.id,
      phone:this.phone,
      service_center_id:this.service_center_id,
      order_date:this.date,
      car_model:this.car_model,
      services:this.services,
      order_details:this.order_details,
      order_state:"appended",



    }
    console.log(data)
    this.dataService.insert(data,{headers:headers}).subscribe({
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
  }else{

    Swal.fire({
      icon: 'warning',
      title: 'Please Login First ',
      showConfirmButton: true,
      confirmButtonText: ' Login',
      allowOutsideClick: false,
      allowEscapeKey: false,
         timer: 3000 // يغلق تلقائيا بعد 3 ثواني
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigateByUrl('/login');
      }
    });
  }
  }

ngOnInit(){
this.route.params.subscribe((params:Params)=>{this.service_center_id=params['id']})
this.loginService.auth().subscribe(
  (data) => {
  this.datauser=data
  })
}



}
