// wishlist.selectors.ts
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { WishListState } from './wishlist.reducer';


export const selectWishlistState = createFeatureSelector<WishListState>('wishListStore');

export const selectWishlistItems = createSelector(
  selectWishlistState,
  (state: WishListState) => state.wishListItems
);

export const selectWishlistLoading = createSelector(
  selectWishlistState,
  (state: WishListState) => state.loading
);

export const selectWishlistError = createSelector(
  selectWishlistState,
  (state: WishListState) => state.error
);

export const selectWishlistCount = createSelector(
  selectWishlistState,
  (state: WishListState) => state.wishListItems?.length
);