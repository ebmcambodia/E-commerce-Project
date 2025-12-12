import { createAction, props } from "@ngrx/store";
import { WishlistItem } from "src/app/core/Models/wishlist";

export const resetWishList = createAction('[WishList] Reset WishList');

export const loadWishList = createAction('[WishList] Load WishList');
export const loadWishListSuccess = createAction('[WishList] Load WishList Success',props<{wishListItems:WishlistItem[]}>());
export const loadWishListFailure = createAction('[WishList] Load WishList Failure',props<{error:any}>());

export const AddToWishList = createAction('[WishList] Add To WishList',props<{ productId: number }>());

export const RemoveFromWishList = createAction('[WishList] Remove From WishList',props<{ productId: number }>());
