export interface PaymentDetails {
    id: number;
    userId: number;
    orderId: number;
    razorPayOrderId: string;
    razorpay_payment_id: string | null;
    razorpay_signature: string | null;
    amount: number;
    status: string;
}