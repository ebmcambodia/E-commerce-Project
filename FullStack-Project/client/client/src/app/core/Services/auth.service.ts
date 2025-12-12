import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, interval, map, Observable, of, Subscription, switchMap, tap } from 'rxjs';
import { LoginReq, LoginResData, RegisterUserData } from '../Models/Auth';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ResponseDto } from '../Models/response';
import { UserDto } from '../Models/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isUserLoggedIn:BehaviorSubject<boolean>= new BehaviorSubject(false);
  private userDetail=new BehaviorSubject<UserDto|null|undefined>(undefined);
  private refreshTokenSubscription: Subscription | null = null;


  constructor(
    private http:HttpClient,
    private jwtHelper:JwtHelperService,
    private router:Router
  ) { }

  isUserLogInObservable(){
    //return this.isUserLoggedIn.value && !this.jwtHelper.isTokenExpired(this.getAccessToken());
    return this.isUserLoggedIn.asObservable();
  }
  UserLoggedIn(){
    return this.isUserLoggedIn.value && !this.jwtHelper.isTokenExpired(this.getAccessToken());
  }

  getLoggedInUserDetail(){
    return this.userDetail.value;
  }
  getLoggedInUserId(){
    return this.userDetail.value?.userId;
  }

  Login(crediential:LoginReq){
      return this.http.post<ResponseDto<LoginResData>>('auth/login',crediential).pipe(
        map((res)=>{
            if(res.isSuccessed==true){
              res.data?.accessToken!==undefined && localStorage.setItem('accestoken',res.data?.accessToken);
              res.data?.refreshToken!==undefined && localStorage.setItem('refreshtoken',res.data?.refreshToken);
              this.userDetail.next(res.data?.userData);
              this.isUserLoggedIn.next(true);
              this.startTokenRefresh();

            }
            return res;
        })
      )
  }

  RegisterUser(userData:RegisterUserData){
    return this.http.post<ResponseDto<null>>('auth/register',userData);
  }

  LogOut(){
    return this.http.get<ResponseDto<null>>('auth/revoke').pipe(
      map((res)=>{
        if(res.isSuccessed){
          this.removeUser();
          this.router.navigateByUrl('/');
        }
        return res;
      })
    );

  }

  refreshUser() {
    var accessToken = localStorage.getItem('accestoken');
    var refreshToken = localStorage.getItem('refreshtoken');

    return this.http.post<ResponseDto<LoginResData>>('auth/refresh', {
      accessToken,
      refreshToken
    }).pipe(
      map((res) => {
        if (res.isSuccessed == true) {
          res.data?.accessToken!==undefined && localStorage.setItem('accestoken',res.data?.accessToken);
          res.data?.refreshToken!==undefined && localStorage.setItem('refreshtoken',res.data?.refreshToken);
          this.userDetail.next(res.data?.userData)
          if(!this.isUserLoggedIn.getValue()) this.isUserLoggedIn.next(true);
          return true;
        }
        else{
          this.removeUser();
          return of(false);

        }
      }),
      catchError(()=>{
        this.removeUser();
        return of(false);
      })
    )

  }

  startTokenRefresh() {
    if (!this.refreshTokenSubscription && this.UserLoggedIn()) {
      this.refreshTokenSubscription = interval(5 * 60 * 1000) // Refresh every 5 minutes
        .pipe(
          switchMap(() => this.refreshUser())
        )
        .subscribe({
          next: (token) => {
            console.log('Token refreshed:', token);
          },
          error: (err) => {
            console.error('Token refresh failed:', err);
            this.removeUser();
          },
        });
    }
  }

  stopTokenRefresh() {
    if (this.refreshTokenSubscription) {
      this.refreshTokenSubscription.unsubscribe();
      this.refreshTokenSubscription = null;
    }
  }

  getAccessToken(){
    return localStorage.getItem('accestoken')
  }

  getRefreshToken(){
    return localStorage.getItem('refreshtoken')
  }

  private removeUser(){
    localStorage.setItem('accestoken','');
    localStorage.setItem('refreshtoken','');
    this.isUserLoggedIn.next(false);
    this.userDetail.next(undefined);
    this.stopTokenRefresh();
  }
}
