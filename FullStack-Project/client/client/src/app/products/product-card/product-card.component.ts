import { Component, Inject, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductResDto } from 'src/app/core/Models/catalog';
import { BASE_API, BASE_IMAGE_API } from 'src/app/core/token/baseUrl.token';
import { AddToCart } from 'src/app/redux/cart/cart.action';
import { AppState } from 'src/app/redux/store';
import { AddToWishList } from 'src/app/redux/wishlist/wishlist.action';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

  constructor(@Inject(BASE_IMAGE_API) public imageUrl: string,private store:Store<AppState>) {}
   
  @Input() product!:ProductResDto;

  addToCart(productId:number){
      this.store.dispatch(AddToCart({productId,quantity:1}))
  }

  addToWishList(productId:number){
    this.store.dispatch(AddToWishList({productId}))
  }
}
