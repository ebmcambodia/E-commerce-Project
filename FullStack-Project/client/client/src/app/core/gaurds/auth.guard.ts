import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { tap } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  var authService = inject(AuthService);
  var router = inject(Router);

  return authService.isUserLogInObservable().pipe(
    tap((isUserAuthenticated) => {
      if (isUserAuthenticated === true) {
        return true;
      }
      else {
        router.navigateByUrl('/auth/login');
        return false;
      }
    }
    )

  );

};
