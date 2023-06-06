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

@Injectable({ providedIn: 'root' })
export class CanRegister implements CanActivate, CanMatch {
  cookieService = inject(CookieService);
  router = inject(Router);

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> {
    const cookie = this.cookieService.check('accessToken');

    if (cookie) {
      this.router.navigate(['/']);
      return false;
    }

    return true;
  }
  canMatch(
    route: Route,
    segments: UrlSegment[]
  ): boolean | Observable<boolean> {
    const cookie = this.cookieService.check('accessToken');

    if (cookie) {
      this.router.navigate(['/']);
      return false;
    }

    return true;
  }
}
