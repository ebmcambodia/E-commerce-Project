import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailDTO } from 'src/app/core/Models/order';
import { OrdersService } from 'src/app/core/Services/orders.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {
  details!: OrderDetailDTO;
  constructor(
    private orderService: OrdersService,
    private routing: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.routing.paramMap.subscribe((params) => {

      this.orderService.getOrderDetail(Number(params.get('orderId'))).subscribe(d => {
        this.details = d;
      })
    });
  }


}
