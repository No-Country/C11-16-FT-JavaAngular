import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DataFormFilter } from 'src/app/interfaces/data-form.interface';
import { TripModifie } from 'src/app/interfaces/trip_interface';
import { DataService } from 'src/app/services/data.service';

interface Travell {
  id: number;
  title: string;
  location: string;
  option: string;
  days: string;
  price: number;
}

interface Popular {
  id: number;
  title: string;
  img: string;
}

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css'],
})
export class PackagesComponent implements OnInit {
  travellsArray!: TripModifie[];

  formBuilder = inject(FormBuilder);
  dataService = inject(DataService);

  ngOnInit(): void {
    window.scroll(0, 1009);

    this.searchTrip();
  }

  searchTrip() {
    if (sessionStorage.getItem('datos')) {
      this.travellsArray = JSON.parse(sessionStorage.getItem('datos')!).slice(
        0,
        4
      );
    } else {
      this.dataService.searchTrip().subscribe((data) => {
        this.travellsArray = data
          .map((trip) => {
            return {
              id: trip.id,
              type: trip.type,
              origin: trip.origin,
              destination: trip.destination,
              price: trip.price,
              departure: trip.departure,
              image: trip.image,
              children: trip.children,
              adults: trip.adults,
              pet_friendly: trip.pet_friendly,
              hotel: trip.hotel,
            };
          })
          .slice(0, 4); // Obtener solo las 5 primeras respuestas
      });
    }
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
