import { Component, HostListener, OnInit, inject } from '@angular/core';
import { AuthService } from '../auth/services/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { WindowSizeServiceService } from '../services/window-size-service.service';
import { DataService } from '../services/data.service';
import { Trip } from '../interfaces/trip_interface';

@Component({
  selector: 'app-ecommerce',
  templateUrl: './ecommerce.component.html',
  styleUrls: ['./ecommerce.component.css'],
})
export class EcommerceComponent implements OnInit {
  data!: Trip[];

  authService = inject(AuthService);
  cookieService = inject(CookieService);
  windowSizeService = inject(WindowSizeServiceService);
  dataService = inject(DataService);

  ngOnInit(): void {
    if (this.cookieService.check('accessToken')) {
      this.authService.setMyBoolean(true);
    } else {
      this.authService.setMyBoolean(false);
    }

    this.searchTrips();
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: Event) {
    this.windowSizeService.setScreenWidth(window.innerWidth);
  }

  searchTrips() {
    if (sessionStorage.getItem('datos')) {
      this.data = JSON.parse(sessionStorage.getItem('datos')!);
      return;
    }

    this.dataService.searchTrip().subscribe((trips) => {
      sessionStorage.setItem('datos', JSON.stringify(trips));

      this.data = trips;
      location.reload();
    });
  }
}
