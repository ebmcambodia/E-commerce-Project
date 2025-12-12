import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../core/Services/orders.service';
import { GetUserOrdersDTO } from '../../core/Models/userOrder';

@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.css']
})
export class UserOrdersComponent implements OnInit {
  orders!:GetUserOrdersDTO[];
  constructor(
    public orderService: OrdersService
  ) { 

  }
  ngOnInit(): void {
    this.orderService.getUserOrders().subscribe(o=>{
      this.orders=o
    })
  }
}
