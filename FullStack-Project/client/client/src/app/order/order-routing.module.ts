import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserOrdersComponent } from './user-orders/user-orders.component';
import { OrderDetailsComponent } from './order-details/order-details.component';


const routes: Routes = [
  {
    path:'',
    component:UserOrdersComponent,
    pathMatch:'full'
  },
  {
    path:'detail/:orderId',
    component:OrderDetailsComponent,
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
