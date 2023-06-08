import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Trip } from 'src/app/interfaces/trip_interface';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  trip!: Trip;

  taxes = 0.21;

  dataService = inject(DataService);
  route = inject(ActivatedRoute);

  ngOnInit(): void {
    window.scroll(0, 1009);

    this.route.params.subscribe((params) => {
      // Accede a los parámetros aquí
      const id = params['id'];
      // Realiza las acciones necesarias con los parámetros
      this.dataService.searchTripById(id).subscribe((data) => {
        this.trip = data;
      });
    });
  }
}
