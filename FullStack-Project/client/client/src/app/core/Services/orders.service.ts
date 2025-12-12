import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetUserOrdersDTO } from '../Models/userOrder';
import { OrderDetailDTO } from '../Models/order';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http:HttpClient) { }

  getUserOrders(){
    return this.http.get<GetUserOrdersDTO[]>('Order/Get-all-orders')
  }

  getOrderDetail(orderId:number){
    return this.http.get<OrderDetailDTO>('Order/orderdetail/'+orderId)
  }
}
