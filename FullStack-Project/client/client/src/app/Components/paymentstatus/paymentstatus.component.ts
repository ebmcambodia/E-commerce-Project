// import { Component } from '@angular/core';

// @Component({
//   standalone:true,
//   selector: 'app-paymentstatus',
//   templateUrl: './paymentstatus.component.html',
//   styleUrls: ['./paymentstatus.component.css']
// })
// export class PaymentstatusComponent {
// khqr: any;

// }


import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common'; // Required for *ngIf
import { Router } from '@angular/router';
import { PaymentService } from '../../core/Services/payment.service'; 
import { Subscription, interval } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';

@Component({
  standalone: true,
  selector: 'app-paymentstatus',
  imports: [CommonModule], // Import CommonModule for *ngIf and Pipes
  templateUrl: './paymentstatus.component.html',
  styleUrls: ['./paymentstatus.component.css']
})

export class PaymentstatusComponent implements OnInit, OnDestroy {
  paymentData: any;
  status: 'PENDING' | 'SUCCESS' | 'FAILED' = 'PENDING';
  private statusSub?: Subscription;

  constructor(
    public router: Router, 
    private paymentService: PaymentService
  ) {
    const nav = this.router.getCurrentNavigation();
    this.paymentData = nav?.extras.state;
  }

  ngOnInit(): void {
    
    if (!this.paymentData || !this.paymentData.orderId) {
      this.router.navigate(['/']); 
      return;
    }
    
    
    this.pollStatus();
  }

  pollStatus() {
    this.statusSub?.unsubscribe(); 
    this.statusSub = interval(4000)
      .pipe(
        startWith(0),
        switchMap(() => this.paymentService.checkPaymentStatus(this.paymentData.orderId))
      )
      .subscribe({
        next: (res) => {
          if (res.isSuccessed) {
            // Logic to switch view based on backend status
            if (res.data.status === 'PAID') {
              this.status = 'SUCCESS';
              this.statusSub?.unsubscribe();
            } else if (res.data.status === 'REJECTED') {
              this.status = 'FAILED';
              this.statusSub?.unsubscribe();
            }
          }
        },
        error: () => this.status = 'FAILED'
      });
  }

  ngOnDestroy() {
    this.statusSub?.unsubscribe();
  }
}

