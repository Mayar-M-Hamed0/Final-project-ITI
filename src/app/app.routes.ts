import { DashbordComponent } from './dash/dashbord/dashbord.component';

import { Routes } from '@angular/router';

import { PageOfServiceComponent } from './page-of-service/page-of-service.component';
import { DetailsServiceComponent } from './details-service/details-service.component';
import { SingUpComponent } from './sing-up/sing-up.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CenterOrdersComponent } from './center-orders/center-orders.component';
import { BookingnowComponent } from './details-service/bookingnow/bookingnow.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { ServiceformComponent } from './serviceform/serviceform.component';
import { CommenteditComponent } from './commentedit/commentedit.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { check } from './checklog.guard';
import { AuthGuard } from './auth.guard';
import { UpdateuserComponent } from './user-profile/updateuser/updateuser.component';
import { CreateserviceComponent } from './dash/createservice/createservice.component';
import { ViewserviceComponent } from './dash/viewservice/viewservice.component';
import { UpdateserviceComponent } from './dash/updateservice/updateservice.component';
export const routes: Routes = [
  {
    path:"",
    component:HomeComponent , title:"Home"
  },



  {
    path:"Home",
    component:HomeComponent , title:"Home"
  },





 { path:"service",
  component:PageOfServiceComponent , title:"service"


}, { path:"details-service/:id",
component:DetailsServiceComponent , title:"details-service"
},


{ path:"Singup",
component:SingUpComponent , title:"signup",canActivate:[AuthGuard]
},

{ path:"serviceform",
component:ServiceformComponent , title:"serviceform"
},

{ path:"comment/:id/edit", component:CommenteditComponent},




{ path:"login",
component:LoginComponent, title:"Login",canActivate:[AuthGuard]
},

{ path:"orders",

component:CenterOrdersComponent, title:"center order"
},
{ path:"bookingnow/:id",

component:BookingnowComponent, title:"order"
},
{ path:"orderdetails",

component:OrderDetailsComponent, title:"orderdetails"
},

{ path:"user",

component:UserProfileComponent, title:"user",canActivate: [check] 
},
{ path:"EditProfile",

component:UpdateuserComponent, title:"EditProfile",canActivate: [check] 
},

{ path:"dash",

component:DashbordComponent, title:"user"
},
// { path:"CreateService",

// component:CreateserviceComponent, title:"CreateService"
// },
// { path:"viewservice",

// component:ViewserviceComponent, title:"viewservice"
// },

// { path:"Updateservice",

// component:UpdateserviceComponent, title:"Updateservice"
// },




{ path:"**",

component:NotfoundComponent, title:"Not Found 404"
},



];
