import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ShoppingCart } from '../Models/Cart';
import { ResponseDto } from '../Models/response';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  getUserCart() {
    return this.http.get<ResponseDto<ShoppingCart>>('Cart')
  }
  addProductToCart(productId: number, quantity: number) {
    return this.http.post<ResponseDto<null>>('Cart', {
      userId: 1,
      productId,
      quantity
    });
  }
  updateCartItem(cartItemId: number, quantity: number) {
    return this.http.post<ResponseDto<null>>('CartItem', {
      userId: 1,
      cartItemId,
      quantity
    })
  }
  removeCartItem(cartItemId: number,) {
    return this.http.delete<ResponseDto<null>>('CartItem/'+cartItemId)
  }
}
