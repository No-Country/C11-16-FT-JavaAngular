import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Trip } from 'src/app/interfaces/trip_interface';
import { DataService } from 'src/app/services/data.service';

interface Popular {
  id: number;
  title: string;
  img: string;
}

@Component({
  selector: 'app-summary-purchase',
  templateUrl: './summary-purchase.component.html',
  styleUrls: ['./summary-purchase.component.css'],
})
export class SummaryPurchaseComponent implements OnInit {
  trip!: Trip;

  cardNumber!: number;

  dataService = inject(DataService);
  route = inject(ActivatedRoute);
  formBuilder = inject(FormBuilder);
  router = inject(Router);

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

    const min = 1000; // El número mínimo de 4 dígitos (1000)
    const max = 9999;

    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    this.cardNumber = randomNumber;
  }

  popularArray: Popular[] = [
    {
      id: 6,
      title: 'Descubrí Bariloche en cualquier época del año.',
      img: '../../../../../../assets/images/montaña-min.png',
    },
    {
      id: 5,
      title: 'Enamorate de las maravillosas Cataratas.',
      img: '../../../../../../assets/images/cataratas-min.png',
    },
    {
      id: 4,
      title: 'Conectate con nuestra Coordillera.',
      img: '../../../../../../assets/images/montaña-min-dos.png',
    },
  ];
}
