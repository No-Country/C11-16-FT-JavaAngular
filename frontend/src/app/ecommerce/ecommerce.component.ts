import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from '../auth/services/auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-ecommerce',
  templateUrl: './ecommerce.component.html',
  styleUrls: ['./ecommerce.component.css'],
})
export class EcommerceComponent implements OnInit {
  authService = inject(AuthService);
  cookieService = inject(CookieService);

  ngOnInit(): void {
    if (this.cookieService.check('accessToken')) {
      this.authService.setMyBoolean(true);
    } else {
      this.authService.setMyBoolean(false);
    }
  }
}
