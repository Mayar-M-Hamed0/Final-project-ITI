import { Routes } from '@angular/router';
import path from 'node:path';
import { PageOfServiceComponent } from './page-of-service/page-of-service.component';
import { DetailsServiceComponent } from './details-service/details-service.component';
import { SingUpComponent } from './sing-up/sing-up.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
 { path:"service",
  component:PageOfServiceComponent
}, { path:"details-service",
component:DetailsServiceComponent
},

{ path:"Singup",
component:SingUpComponent
},
{ path:"login",
component:LoginComponent
}


];
