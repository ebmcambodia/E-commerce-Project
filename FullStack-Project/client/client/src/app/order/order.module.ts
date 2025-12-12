import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { UserOrdersComponent } from './user-orders/user-orders.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrderRoutingModule } from './order-routing.module';
import { OrderTrackerComponent } from './order-tracker/order-tracker.component';
import { MatStepperModule } from '@angular/material/stepper';



@NgModule({
  declarations: [
    UserOrdersComponent,
    OrderDetailsComponent,
    OrderTrackerComponent
  ],
  imports: [
    SharedModule,
    OrderRoutingModule,
    MatStepperModule
  ],
  exports:[
    UserOrdersComponent,
    OrderDetailsComponent
  ]
})
export class OrderModule { }
