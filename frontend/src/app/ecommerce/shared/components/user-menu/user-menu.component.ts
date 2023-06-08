import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css'],
})
export class UserMenuComponent {
  cookieService = inject(CookieService);
  authService = inject(AuthService);
  router = inject(Router);

  logOut() {
    this.cookieService.delete('accessToken');
    localStorage.clear();
    this.authService.setMyBoolean(false);

    if (this.router.routerState.snapshot.url === '/pago') {
      this.router.navigate(['/']);
    }
  }
}
