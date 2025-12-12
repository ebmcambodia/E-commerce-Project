import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { BehaviorSubject, catchError, filter, Observable, of, switchMap, take, throwError } from 'rxjs';
import { AuthService } from '../Services/auth.service';

@Injectable()
export class AuthIntercetorInterceptor implements HttpInterceptor {
  
  isUserRefreshing:BehaviorSubject<boolean>=new BehaviorSubject<boolean>(false);

  constructor(private authService: AuthService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    if (this.authService.UserLoggedIn()) {
      request = request.clone({
        headers: request.headers.set('Authorization', 'Bearer ' + this.authService.getAccessToken())
      })
    }

    return next.handle(request).pipe(
      catchError((error:HttpErrorResponse) => {
        const isError = error instanceof HttpErrorResponse;
        if (isError && error.status === 401 && this.authService.UserLoggedIn()) {
          
          if(!this.isUserRefreshing.getValue()){
            this.isUserRefreshing.next(true) 
            return this.authService.refreshUser().pipe(
              switchMap((res) => {
                this.isUserRefreshing.next(false) 
                if (res) {
                  return next.handle(request.clone({
                    headers: request.headers.set('Authorization', 'Bearer ' + this.authService.getAccessToken())
                  }))
                }
                else {
                  this.authService.LogOut();
                  return of(false);
                }
              }),
              catchError((refreshErr) => {
                this.isUserRefreshing.next(false) 
                this.authService.LogOut();
                return refreshErr;
              })
            )
          }

          return this.isUserRefreshing.pipe(
            filter((val)=>val==false),
            take(1),
            switchMap(()=>{
              return next.handle(request.clone({
                headers: request.headers.set('Authorization', 'Bearer ' + this.authService.getAccessToken())
              }))
            })
          )


        }
        return throwError(()=>error);
      })
    ) as Observable<HttpEvent<any>>;
  }
}
