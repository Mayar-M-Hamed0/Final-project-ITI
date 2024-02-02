import { Routes } from '@angular/router';
import path from 'node:path';
import { PageOfServiceComponent } from './page-of-service/page-of-service.component';
import { DetailsServiceComponent } from './details-service/details-service.component';

export const routes: Routes = [
 { path:"",
  component:PageOfServiceComponent
}, { path:"details-service",
component:DetailsServiceComponent
}


];
