import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from '../../core/Services/auth.service';
import { UserAddressService } from '../../core/Services/user-address.service';
import { NotificationService } from '../../notification/notification.service';

@Component({
  standalone:true,
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css'],
  imports:[
    //BrowserAnimationsModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AddressFormComponent implements OnInit {
  addressForm!:FormGroup; 

  constructor(
    private fb: FormBuilder,
    private authService:AuthService,
    private addressService:UserAddressService,
    private notification:NotificationService
  ) {}

  ngOnInit(): void {
    this.addressForm= this.fb.group({
      userId:this.authService.getLoggedInUserId(),
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      address: [null, Validators.required],
      address2: null,
      city: [null, Validators.required],
      state: [null, Validators.required],
      postalCode: [
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(6)
        ])
      ],
      shipping: ["free", Validators.required]
    });
  }

  onSubmit() {
    console.log(this.addressForm.value);
    if (this.addressForm.valid) {
      this.addressService.addAddress({
        userId: this.addressForm.get('userId')?.value,
        firstName:this.addressForm.get('firstName')?.value,
        lastName:this.addressForm.get('lastName')?.value,
        addressLine1: this.addressForm.get('address')?.value,
        addressLine2: this.addressForm.get('address2')?.value,
        city: this.addressForm.get('city')?.value,
        state: this.addressForm.get('state')?.value,
        country: 'INDIA',
        postalCode: this.addressForm.get('postalCode')?.value
      }).subscribe(res => {
        if (res.isSuccessed) {
          this.notification.Success("Address added successfully!");
        }
        else {
          this.notification.Error(res.message);
        }
      });
    }
  }

  states = [
    'Andhra Pradesh',
    ' Arunachal Pradesh',
    ' Assam',' Bihar',' Chhattisgarh',' Goa',' Gujarat',' Haryana',' Himachal Pradesh',' Jharkhand',' Karnataka',' Kerala',' Madhya Pradesh',' Maharashtra',' Manipur',' Meghalaya',' Mizoram',' Nagaland',' Odisha',' Punjab',' Rajasthan',' Sikkim',' Tamil Nadu',' Telangana',' Tripura',' Uttar Pradesh',' Uttarakhand','West Bengal'
  ];
}
