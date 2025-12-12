import { AddressDto } from "./address";
import { ProductResDto } from "./catalog";
import { PaymentDetails } from "./paymentDetail";


export interface OrderItem {
    id: number;
    orderId: number;
    productId: number;
    product: ProductResDto;
    quantity: number;
    totalPriceAfterDiscount: number;
    totalDiscount: number;
    totalPrice: number;
}

export interface Order{
    id: number;
    userId: number;
    orderDate: string;
    totalPriceAfterDiscount: number;
    totalDiscount: number;
    totalPrice: number;
    status: string;
    orderItems: OrderItem[];
}

export interface OrderDetailDTO {
    order: Order;
    paymentDetails: PaymentDetails;
    shippingAddress:AddressDto;
}
