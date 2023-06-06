import { Injectable, inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanMatch,
  RouterStateSnapshot,
  Route,
  UrlSegment,
  Router,
} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { Notify } from 'notiflix';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate, CanMatch {
  cookieService = inject(CookieService);
  router = inject(Router);

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> {
    const cookie = this.cookieService.check('accessToken');
    Notify.init({ position: 'right-bottom' });

    if (!cookie) {
      // this.router.navigate(['/']);
      Notify.failure('Debe iniciar sesión para proceder con el pago');
      return false;
    }

    return true;
  }
  canMatch(
    route: Route,
    segments: UrlSegment[]
  ): boolean | Observable<boolean> {
    const cookie = this.cookieService.check('accessToken');
    Notify.init({ position: 'right-bottom' });

    if (!cookie) {
      // this.router.navigate(['/']);
      Notify.failure('Debe iniciar sesión para proceder con el pago');
      return false;
    }

    return true;
  }
}
