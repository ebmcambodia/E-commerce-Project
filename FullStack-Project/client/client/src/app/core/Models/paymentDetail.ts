export interface PaymentDetails {
    id: number;
    userId: number;
    orderId: number;
    BakongOrderId: string ;
    Bakong_payment_id: string | null;
    Bakong_signature: string | null;
    amount: number;
    status: string;
}