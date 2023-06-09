import { Component, Input, OnInit, inject } from '@angular/core';
import { IsActiveMatchOptions, Router } from '@angular/router';
import { TripModifie } from 'src/app/interfaces/trip_interface';

@Component({
  selector: 'app-cards-travells',
  templateUrl: './cards-travells.component.html',
  styleUrls: ['./cards-travells.component.css'],
})
export class CardsTravellsComponent implements OnInit {
  @Input() travell!: TripModifie;

  showDetails = false;

  router = inject(Router);

  ngOnInit(): void {
    const options: IsActiveMatchOptions = {
      paths: 'subset',
      matrixParams: 'ignored',
      queryParams: 'ignored',
      fragment: 'ignored',
    };
    const isPagoRoute = this.router.isActive('/pago', options);

    if (isPagoRoute) {
      this.showDetails = true;
    } else {
      this.showDetails = false;
    }
  }
}
