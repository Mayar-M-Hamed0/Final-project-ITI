import { Routes } from '@angular/router';

import { PageOfServiceComponent } from './page-of-service/page-of-service.component';
import { DetailsServiceComponent } from './details-service/details-service.component';
import { SingUpComponent } from './sing-up/sing-up.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path:"",
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



];
