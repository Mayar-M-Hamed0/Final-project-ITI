import { Routes } from '@angular/router';

import { PageOfServiceComponent } from './page-of-service/page-of-service.component';
import { DetailsServiceComponent } from './details-service/details-service.component';
import { SingUpComponent } from './sing-up/sing-up.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CenterOrdersComponent } from './center-orders/center-orders.component';
import { BookingnowComponent } from './details-service/bookingnow/bookingnow.component';

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
}, { path:"details-service",
component:DetailsServiceComponent , title:"details-service"
},

{ path:"Singup",
component:SingUpComponent , title:"signup"
},
{ path:"login",
component:LoginComponent, title:"Login"
},

{ path:"orders",

component:CenterOrdersComponent, title:"center order"
},
{ path:"bookingnow",

component:BookingnowComponent, title:"order"
},
{ path:"**",

component:NotfoundComponent, title:"Not Found 404"
},



];
