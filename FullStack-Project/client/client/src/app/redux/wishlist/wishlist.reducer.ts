import { createReducer, on } from "@ngrx/store";
import { WishlistItem } from "src/app/core/Models/wishlist";
import { loadWishList, loadWishListFailure, loadWishListSuccess, resetWishList } from "./wishlist.action";


export interface WishListState {
    wishListItems: WishlistItem[]|null,
    loading: boolean;
    error: any;
}

export const initialState: WishListState = {
    wishListItems: null,
    loading: false,
    error: null
};

export const wishlistReducer = createReducer(
    initialState,
    on(loadWishList, (state) => ({
        ...state,
        loading: true,
        error: null,
    })),
    on(loadWishListSuccess, (state, { wishListItems }) => ({
        ...state,
        loading: false,
        wishListItems,
    })),
    on(loadWishListFailure, (state, { error }) => ({
        ...state,
        loading: false,
        error,
    })),
    on(resetWishList, (state) => ({
        wishListItems: null,
        loading: false,
        error: null
    }))
);