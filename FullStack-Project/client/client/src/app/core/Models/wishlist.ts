import { ProductResDto } from "./catalog";


export interface WishlistItem {
    id: number;
    productId: number;
    product: ProductResDto;
}