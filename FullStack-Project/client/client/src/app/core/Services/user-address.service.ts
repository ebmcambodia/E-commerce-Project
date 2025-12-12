import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseDto } from '../Models/response';
import { AddAddressDto, AddressDto } from '../Models/address';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAddressService {
  
  private address = new BehaviorSubject<AddressDto[]>([]);
  address$=this.address.asObservable();
  constructor(private http:HttpClient) { }

  loadAddress(userId:Number){
    this.getAllAddressByUserId(userId).subscribe(res=>{
      if(res.isSuccessed && res.data) this.address.next(res.data);
    })
  }
  




  private getAllAddressByUserId(userId:Number){
     return this.http.get<ResponseDto<AddressDto[]>>("User/GetAllAddressByUserId/"+userId);
  }

  addAddress(address:AddAddressDto){
    return this.http.post<ResponseDto<null>>("User/AddAddress",address).pipe(
      tap(res=>{
        if(res.isSuccessed){
          if(address.userId) this.loadAddress(address.userId);
        }
      })
    );
  }

  deleteAddress(userId:Number){
    return this.http.delete<ResponseDto<null>>("User/DeleteAddress/"+userId).pipe(
      tap(res=>{
        if(res.isSuccessed){
          this.loadAddress(userId);
        }
      })
    );
  }
}
