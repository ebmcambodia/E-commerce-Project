import { Action, ActionReducer } from "@ngrx/store";
import { catalogReducer, CatalogState } from "./catalog/catalog.reducer";
import { wishlistReducer, WishListState } from "./wishlist/wishlist.reducer";
import { CatalogEffects } from "./catalog/catalog.effects";
import { WishlistEffects } from "./wishlist/wishlist.effect";
import { CartReducer, CartState } from "./cart/cart.reducer";
import { CartEffect } from "./cart/cart.effects";

export interface AppState {
    catalog: CatalogState,
    wishlist:WishListState,
    cart:CartState
}


export interface AppStore {
    catalogStore: ActionReducer<CatalogState, Action>;
    wishListStore:ActionReducer<WishListState, Action>;
    cartStore:ActionReducer<CartState, Action>;
}
  
  export const appStore: AppStore = {
    catalogStore: catalogReducer,
    wishListStore:wishlistReducer,
    cartStore:CartReducer
  }
  
export const appEffects = [CatalogEffects,WishlistEffects,CartEffect];