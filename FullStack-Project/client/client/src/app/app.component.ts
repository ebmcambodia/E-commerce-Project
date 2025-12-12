import { Component, OnInit } from '@angular/core';
import { CatalogState } from './redux/catalog/catalog.reducer';
import { Store } from '@ngrx/store';
import { selectCategories } from './redux/catalog/catalog.selector';
import { CategoryResDto } from './core/Models/catalog';
import { interval, Observable, Subscription, tap } from 'rxjs';
import { loadCategories } from './redux/catalog/catalog.action';
import { AppState } from './redux/store';
import { AuthService } from './core/Services/auth.service';
import { loadWishList, resetWishList } from './redux/wishlist/wishlist.action';
import { loadCart, resetCart } from './redux/cart/cart.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client';
  categories$: Observable<CategoryResDto[]>;
  refreshTokenSub!:Subscription;

  constructor(private store: Store<AppState>, private authService: AuthService) {
    this.categories$ = this.store.select(selectCategories);
  }

  ngOnInit(): void {
    // Check if products list is empty and dispatch loadProducts action
    this.categories$
      .pipe(
        // Tap operator to side-effect (i.e., dispatch action when necessary)
        tap((categories) => {
          if (categories.length === 0) {
            // Dispatch the action to load products if the list is empty
            this.store.dispatch(loadCategories());
          }
        })
      )
      .subscribe();

    this.authService.isUserLogInObservable().subscribe(t => {
      if (t) {
        this.store.dispatch(loadWishList());
        this.store.dispatch(loadCart());
        // this.refreshTokenSub = interval(10000).subscribe(()=>{
           this.authService.startTokenRefresh();
        // })
      }
      else{
        this.store.dispatch(resetWishList());
        this.store.dispatch(resetCart());
        // if(this.refreshTokenSub){
          this.authService.stopTokenRefresh();
          // }
      }
    })
  }


}
