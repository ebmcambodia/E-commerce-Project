// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { PaymentstatusComponent } from './paymentstatus.component';

// describe('PaymentstatusComponent', () => {
//   let component: PaymentstatusComponent;
//   let fixture: ComponentFixture<PaymentstatusComponent>;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations: [PaymentstatusComponent]
//     });
//     fixture = TestBed.createComponent(PaymentstatusComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });


import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { PaymentstatusComponent } from './paymentstatus.component';
import { PaymentService } from 'src/app/core/Services/payment.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';

describe('PaymentstatusComponent', () => {
  let component: PaymentstatusComponent;
  let fixture: ComponentFixture<PaymentstatusComponent>;
  let mockService: any;
  let mockRouter: any;

  beforeEach(async () => {
    mockService = {
      checkPaymentStatus: jasmine.createSpy().and.returnValue(of({ isSuccessed: true, data: { status: 'PENDING' } }))
    };
    mockRouter = {
      navigate: jasmine.createSpy('navigate'),
      getCurrentNavigation: () => ({ extras: { state: { orderId: '123', qrImage: '...', amount: 1000 } } })
    };

    await TestBed.configureTestingModule({
      imports: [PaymentstatusComponent], // Use imports for standalone components
      providers: [
        { provide: PaymentService, useValue: mockService },
        { provide: Router, useValue: mockRouter }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PaymentstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should show success message when payment is PAID', fakeAsync(() => {
    mockService.checkPaymentStatus.and.returnValue(of({ isSuccessed: true, data: { status: 'PAID' } }));
    tick(4001); // Wait for the interval
    fixture.detectChanges();

    expect(component.status).toBe('SUCCESS');
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('successful');
  }));
});
