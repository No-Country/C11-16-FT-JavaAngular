import { Component, HostListener, OnInit, inject } from '@angular/core';
import { AuthService } from '../auth/services/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { WindowSizeServiceService } from '../services/window-size-service.service';

@Component({
  selector: 'app-ecommerce',
  templateUrl: './ecommerce.component.html',
  styleUrls: ['./ecommerce.component.css'],
})
export class EcommerceComponent implements OnInit {
  authService = inject(AuthService);
  cookieService = inject(CookieService);
  windowSizeService = inject(WindowSizeServiceService);

  ngOnInit(): void {
    if (this.cookieService.check('accessToken')) {
      this.authService.setMyBoolean(true);
    } else {
      this.authService.setMyBoolean(false);
    }
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: Event) {
    this.windowSizeService.setScreenWidth(window.innerWidth);
  }
}
