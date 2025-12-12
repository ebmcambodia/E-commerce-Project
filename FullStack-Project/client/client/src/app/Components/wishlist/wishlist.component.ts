import { Component, Inject, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { WishlistService } from '../../core/Services/wishlist.service';
import { WishlistItem } from '../../core/Models/wishlist';
import { BASE_IMAGE_API } from '../../core/token/baseUrl.token';
import { Store } from '@ngrx/store';
import { AppState } from '../../redux/store';
import { AddToWishList, loadWishList, RemoveFromWishList } from '../../redux/wishlist/wishlist.action';
import { Observable } from 'rxjs';
import { selectWishlistItems, selectWishlistLoading } from '../../redux/wishlist/wishlist.selector';
import { AddToCart } from '../../redux/cart/cart.action';


@Component({
  standalone:true,
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css'],
  imports:[SharedModule]
})
export class WishlistComponent implements OnInit {
  wishlistItems!: WishlistItem[]|null;
  wishlistItems$:Observable<WishlistItem[]|null>;
  loading$: Observable<boolean>;


  constructor(
    private service:WishlistService,
    @Inject(BASE_IMAGE_API) public imageUrl: string,
    private store:Store<AppState>
  ){
    this.wishlistItems$=this.store.select(selectWishlistItems);
    this.loading$ = this.store.select(selectWishlistLoading);
  }

  ngOnInit(): void {

    this.store.dispatch(loadWishList());


    this.store.select(selectWishlistItems).subscribe(res=>{
      this.wishlistItems=res;
    })
  }

  



  addToCart(productId: number) {
    this.store.dispatch(AddToCart({productId,quantity:1}));
    this.store.dispatch(RemoveFromWishList({ productId }));
  }

  contactUs(item: WishlistItem) {
    // Contact us logic
    // console.log(`Contact for ${item.name}`);
  }

  removeItem(productId: number) {
    this.store.dispatch(RemoveFromWishList({ productId }));
  }
}
