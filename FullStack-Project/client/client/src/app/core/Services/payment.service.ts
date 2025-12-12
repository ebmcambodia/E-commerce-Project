import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddressDto } from '../Models/address';
import { ResponseDto } from '../Models/response';
import { map, tap } from 'rxjs';
import { NotificationService } from 'src/app/notification/notification.service';
import { WindowRefService } from './window-ref.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(
    private http: HttpClient,
    private notification: NotificationService,
    private router: Router,
    private winRef: WindowRefService
  ) { }

  createOrder(cartId: number, shipToAddress: AddressDto) {
    return this.http.post<ResponseDto<any>>('Order/CreateOrder', { cartId, shipToAddress }).pipe(
      tap(res => {
        if (res.isSuccessed) {
          const options: any = {
            key: environment.razorPayKey, // Enter the Key ID generated from the Dashboard
            amount: res.data.amount * 100, // Amount in paise
            currency: 'INR',
            name: 'ApexCart',//Your Company Name
            description: 'Purchase Description',
            order_id: res.data.razorPayOrderId,
            modal: {
              // We should prevent closing of the form when esc key is pressed.
              escape: false,
            },
            handler: (paymentRes: any) => {
              console.log(paymentRes);
              //alert('Payment successful!');
              this.updatePayment(paymentRes.razorpay_order_id, paymentRes.razorpay_payment_id, paymentRes.razorpay_signature).subscribe(() => {
                this.router.navigateByUrl('/orders/detail/' + res.data.orderId)
              });
            },
            prefill: {
              name: shipToAddress.firstName + ' ' + shipToAddress.lastName,
              email: 'youremail@example.com',
              contact: '',
            },
            theme: {
              color: '#0c238a'
            }
          };
          options.modal.ondismiss = (() => {
            // handle the case when user closes the form while transaction is in progress
            this.notification.Error('Transaction cancelled.');
          });

          const rzp = new this.winRef.nativeWindow.Razorpay(options);
          rzp.open();
        }
      })
    );
  }
  private updatePayment(orderId: string, paymentId: string, signature: string) {
    return this.http.post("Payment/update-payment", { orderId, paymentId, signature });
  }
}
