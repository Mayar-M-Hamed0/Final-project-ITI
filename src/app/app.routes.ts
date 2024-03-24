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
import { CommenteditComponent } from './commentedit/commentedit.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { check } from './checklog.guard';
import { AuthGuard } from './auth.guard';

import { CreateserviceComponent } from './dash/createservice/createservice.component';
import { ViewserviceComponent } from './dash/viewservice/viewservice.component';
import { UpdateserviceComponent } from './dash/updateservice/updateservice.component';
import { DashboardAccessGuard } from './dashboard.guard';
import { OrdersForAgentComponent } from './orders-for-agent/orders-for-agent.component';
import { ArchiveComponent } from './orders-for-agent/archive/archive.component';
import { UpdateOrderComponent } from './user-profile/updateorder/updateorder.component';
import { UpdateuserComponent } from './user-profile/updateuser/updateuser.component';
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


{ path:"create",
component:CreateserviceComponent , title:"signup",canActivate:[AuthGuard]
},



{ path:"comment/:id/edit", component:CommenteditComponent,canActivate: [check]},




{ path:"login",
component:LoginComponent, title:"Login",canActivate:[AuthGuard]
},

{ path:"orders",

component:CenterOrdersComponent, title:"center order"
},
{ path:"bookingnow/:id",

component:BookingnowComponent, title:"order"
},
{
path:"orderforcenter/:id",
component:OrdersForAgentComponent
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

{ path:"archive/:id",

component:ArchiveComponent, title:"archive"
},
{ path:"updateorder/:id",

component:UpdateOrderComponent, title:"updateorder"
},

{ path:"dash",

component:DashbordComponent, title:"user",canActivate:[DashboardAccessGuard]
},
{ path:"CreateService",

component:CreateserviceComponent, title:"CreateService",canActivate:[DashboardAccessGuard]
},
{ path:"viewservice",

component:ViewserviceComponent, title:"viewservice"
},

{ path:"Updateservice/:id",

component:UpdateserviceComponent, title:"Updateservice",canActivate:[DashboardAccessGuard]
},




{ path:"**",

component:NotfoundComponent, title:"Not Found 404"
},



];
