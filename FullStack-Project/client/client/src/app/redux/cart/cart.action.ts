import { createAction, props } from "@ngrx/store";
import { ShoppingCart } from "src/app/core/Models/Cart";

export const resetCart = createAction('[Cart] Reset Cart');

export const loadCart = createAction('[Cart] Load Cart');
export const loadCartSuccess = createAction('[Cart] Load Cart Success', props<{cart: ShoppingCart|null}>());
export const loadCartFailure = createAction('[Cart] Load Cart Failure',props<{error:any}>());

export const AddToCart = createAction('[Cart] Add Product To Cart', props<{productId: number,quantity:number}>());
export const UpdateCartItem = createAction('[Cart] Update Cart Item', props<{cartItemId: number,quantity:number}>());
export const RemoveCartItem = createAction('[Cart] Remove Cart Item', props<{cartItemId: number}>());