import { Inject, Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import {BASE_API} from '../token/baseUrl.token'
import { NotificationService } from 'src/app/notification/notification.service';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor(@Inject(BASE_API) private apiUrl: string, private toastify: NotificationService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if (!request.url.startsWith('http')) {
      
      // Clone the request and modify its URL by prepending the environment's API URL
      const apiReq = request.clone({
        url: `${this.apiUrl}/${request.url}` // Prepend the base URL
      });

      // Pass the cloned request instead of the original request
      return next.handle(apiReq).pipe(
        catchError((error: HttpErrorResponse) => {
          debugger
          let errorMsg = '';
          if (error.error instanceof ErrorEvent) {
            console.log('This is client side error');
            errorMsg = `Error: ${error.error.message}`;
          } else {
            console.log('This is server side error');
            errorMsg = `Error Code: ${error.status},  Message: ${error.error?.message?error.error?.message: error.message}`;
          }
          this.toastify.Error(errorMsg);
          return throwError(()=>errorMsg);
        }));;
    }
    return next.handle(request);
  }
}
