import { Component } from '@angular/core';

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
export class PackagesComponent {
  travellsArray = [
    {
      id: 1,
      title: 'Hotel Llao Llao',
      location: 'San Carlos de Bariloche',
      option: 'Dos adultos',
      days: '7 días - 8 noches',
      price: 105999,
      img: '../../../../../../../../assets/images/paquete1.jpg',
    },
    {
      id: 2,
      title: 'Hotel Titan',
      location: 'Calafate',
      option: '2 adultos, 2 menores',
      days: '10 días - 9 noches',
      price: 230599,
      img: '../../../../../../../../assets/images/paquete2.jpg',
    },
    {
      id: 3,
      title: 'Hotel Madero ',
      location: 'CABA, Buenos Aires',
      option: 'Un adulto',
      days: '5 días - 5 noches',
      price: 99999,
      img: '../../../../../../../../assets/images/paquete3.jpg',
    },
    {
      id: 4,
      title: 'Sofitel La Reserva',
      location: 'Cardales',
      option: 'Grupo familiar con 2 menores',
      days: '6 días - 6 noches',
      price: 24599,
      img: '../../../../../../../../assets/images/paquete4.jpg',
    },
  ];

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
