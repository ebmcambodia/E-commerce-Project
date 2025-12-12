import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-order-tracker',
  templateUrl: './order-tracker.component.html',
  styleUrls: ['./order-tracker.component.scss']
})
export class OrderTrackerComponent {
  steps:string[] = [
    "Placed",
    'Order Confirmed',
    'Shipped',
    'Out For Delivery',
    'Delivered'
  ];

  @Input() orderStatus!:string;
  @Input() paymentStatus!:string;
  
}
