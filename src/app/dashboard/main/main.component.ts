import { Component } from '@angular/core';
import { TopWidgetsComponent } from '../top-widgets/top-widgets.component';
import { SalesPerMonthComponent } from '../sales-per-month/sales-per-month.component';
import { SalesForServiceCenterComponent } from '../sales-for-service-center/sales-for-service-center.component';
import { LastFewTransectionComponent } from '../last-few-transection/last-few-transection.component';
import { TopThreeCentersComponent } from '../top-three-centers/top-three-centers.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [TopWidgetsComponent,SalesPerMonthComponent,SalesForServiceCenterComponent,LastFewTransectionComponent,TopThreeCentersComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
