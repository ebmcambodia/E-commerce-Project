import { ChangeDetectorRef, Component, Inject, TemplateRef } from '@angular/core';
import { ShoppingCart } from '../../core/Models/Cart';
import { combineLatest, Observable, Subscription } from 'rxjs';
import { BASE_IMAGE_API } from '../../core/token/baseUrl.token';
import { AppState } from '../../redux/store';
import { Store } from '@ngrx/store';
import { selectCartProperty } from '../../redux/cart/cart.selector';
import { loadCart } from '../../redux/cart/cart.action';
import { SharedModule } from '../../shared/shared.module';
import { ModalModule, BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AddressFormComponent } from '../address-form/address-form.component';
import { AuthService } from '../../core/Services/auth.service';
import { UserAddressService } from '../../core/Services/user-address.service';
import { NotificationService } from '../../notification/notification.service';
import { AddressDto } from '../../core/Models/address';
import { PaymentService } from '../../core/Services/payment.service';
import { WindowRefService } from '../../core/Services/window-ref.service';

@Component({
  standalone:true,
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
  imports:[SharedModule,ModalModule,AddressFormComponent],
  providers: [BsModalService]
})
export class CheckoutComponent {
  cart$:Observable<ShoppingCart|null>;
  userId!:number|undefined;
  shipToAddress!:AddressDto;

  constructor(
    @Inject(BASE_IMAGE_API) public imageUrl: string,
    private modalService: BsModalService, 
    private store:Store<AppState>,
    private authService:AuthService,
    public addressService:UserAddressService,
    private notification:NotificationService,
    private paymentService:PaymentService,
  ){
    this.cart$=this.store.select(selectCartProperty);
  }
  ngOnInit(): void {
    this.store.dispatch(loadCart());
    this.userId=this.authService.getLoggedInUserId();
    if(this.userId) {
      this.addressService.loadAddress(this.userId);
    }
  }

  //-------------------------------------------------------------

  modalRef?: BsModalRef;
  //subscriptions: Subscription = new Subscription();
  messages: string[] = [];
 
 
  openModal(template: TemplateRef<void>) {
    this.modalRef = this.modalService.show(template,{class: 'modal-lg'});
  }
 
  // unsubscribe() {
  //   this.subscriptions.unsubscribe();
  // }
  removeAddress(id:number|null){
    if(id)
      this.addressService.deleteAddress(id).subscribe(res=>{
         if(res.isSuccessed) this.notification.Success('Address Removed!');
         else  this.notification.Error(res.message);
      })
  }

  MakePayment(carId:number){
    if(this.shipToAddress==undefined){
      this.notification.Error("Please Select Shipping Address.");
      return;
    }
    this.paymentService.createOrder(carId,this.shipToAddress).subscribe(res=>{
       if(res.isSuccessed){
        this.store.dispatch(loadCart());
        this.notification.Success("Order Created");
       } 
       else this.notification.Error(res.message);   
    });
  }
}
