import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { WishlistService } from "src/app/core/Services/wishlist.service";
import { AddToWishList, loadWishList, loadWishListFailure, loadWishListSuccess, RemoveFromWishList } from "./wishlist.action";
import { catchError, map, mergeMap, of, switchMap } from "rxjs";
import { AuthService } from "src/app/core/Services/auth.service";
import { Router } from "@angular/router";

@Injectable()
export class WishlistEffects {
  constructor(
    private actions$: Actions,
    private wishlistService: WishlistService,
    private authService: AuthService,
    private router:Router
  ) {}

   // Load wishlist effect
  loadWishlist$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadWishList),
      mergeMap(() => {
        if (this.authService.UserLoggedIn()) {
          return this.wishlistService.getWishList().pipe(
            map((res) => loadWishListSuccess({ wishListItems: res })),
            catchError((error) => of(loadWishListFailure({ error })))
          )
        }
        else {
          //this.router.navigate(['/login']);
          return of(loadWishListFailure({ error: 'User not logged in' }));
        }
      }
      )
    )
  );

  // Add product to wishlist effect
  addProductToWishlist$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AddToWishList),
      mergeMap(({ productId }) => {
        if (this.authService.UserLoggedIn()) {
          return this.wishlistService.addToWishlist(productId).pipe(
            switchMap((res) => of(res.isSuccessed ? loadWishList() : loadWishListFailure({ error: res.message }))), // Fetch the updated wishlist
            catchError((error) => of(loadWishListFailure({ error })))
          )
        }
        else {
          this.router.navigate(['/auth/login']);
          return of(loadWishListFailure({ error: 'User not logged in' }));
        }
      }

      )
    )
  );

  // Remove product from wishlist effect
  removeProductFromWishlist$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RemoveFromWishList),
      mergeMap(({ productId }) => {
        if (this.authService.UserLoggedIn()) {
          return this.wishlistService.removeFromWishlist(productId).pipe(
            switchMap((res) => of(res.isSuccessed ? loadWishList() : loadWishListFailure({ error: res.message }))), // Fetch the updated wishlist
            catchError((error) => of(loadWishListFailure({ error })))
          )
        }
        else {
          //this.router.navigate(['/login']);
          return of(loadWishListFailure({ error: 'User not logged in' }));
        }
      }
      )
    )
  );
}