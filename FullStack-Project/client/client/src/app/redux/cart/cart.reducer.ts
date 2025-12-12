import { createReducer, on } from "@ngrx/store";
import { ShoppingCart } from "src/app/core/Models/Cart";
import { loadCart, loadCartFailure, loadCartSuccess, resetCart } from "./cart.action";

export interface CartState {
    cart: ShoppingCart | null,
    loading: boolean,
    error: any
}
export const initialState: CartState = {
    cart: null,
    loading: false,
    error: null
}
export const CartReducer = createReducer(
    initialState,
    on(loadCart, state => ({ ...state, loading: true, error: null })),
    on(loadCartSuccess, (state, { cart }) => ({ ...state, cart, loading: false })),
    on(loadCartFailure, (state, { error }) => ({ ...state, loading: false, error })),
    on(resetCart,state=>({cart: null,loading: false,error: null}))

);

