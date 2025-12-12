import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { WishlistComponent } from './Components/wishlist/wishlist.component';
import { CartComponent } from './Components/cart/cart.component';
import { NotfoundComponent } from './shared/components/notfound/notfound.component';
import { authGuard } from './core/gaurds/auth.guard';
import { CheckoutComponent } from './Components/checkout/checkout.component';
import { PaymentstatusComponent } from './Components/paymentstatus/paymentstatus.component';
import { UserOrdersComponent } from './order/user-orders/user-orders.component';
import { ToastComponent } from './Components/toast/toast.component';
import { OrderDetailsComponent } from './order/order-details/order-details.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent,
    children: [
      {
        path: "",
        component: HomePageComponent
      },
      {
        path:"products",
        loadChildren:()=>import('./products/products.module').then(m=>m.ProductsModule)
      },
      {
        path:"wishlist",
        component:WishlistComponent,
        canActivate:[authGuard]
      },
      {
        path:"cart",
        component:CartComponent,
        canActivate:[authGuard]
      },
      {
        path:"checkout",
        component:CheckoutComponent,
        canActivate:[authGuard]
      },
      {
        path:'payment/:orderId',
        component:PaymentstatusComponent,
        canActivate:[authGuard]
      },
      {
        path:'orders',
        loadChildren:()=>import('./order/order.module').then(m=>m.OrderModule),
        //canActivate:[authGuard]
      }
    ]
  },
  {
    path:"auth",
    loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule)
  },
  {
    path:"**",
    component:NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
