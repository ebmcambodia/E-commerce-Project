import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WishlistItem } from '../Models/wishlist';
import { ResponseDto } from '../Models/response';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private http:HttpClient) { }

  getWishList(){
    return this.http.get<WishlistItem[]>('Wishlist')
  }

   // Add a product to wishlist
  addToWishlist(productId: number) {
    return this.http.get<ResponseDto<null>>(`Wishlist/Add/${productId}`);
  }

  // Remove a product from wishlist
  removeFromWishlist(productId: number){
    return this.http.delete<ResponseDto<null>>(`Wishlist/Remove/${productId}`);
  }
}
