import { ProductResDto } from "./catalog";

export interface ShoppingCartItem {
    id: number;
    shoppingCartId: number;
    productId: number;
    product: ProductResDto;
    quantity: number;
    totalPrice: number;
    totalDiscount: number;
    totalPriceAfterDiscount: number;
}


export interface ShoppingCart {
    id: number;
    shoppingCartItems: ShoppingCartItem[];
    totalPrice: number;
    totalDiscount: number;
    totalPriceAfterDiscount: number;
    totalItems: number;
}