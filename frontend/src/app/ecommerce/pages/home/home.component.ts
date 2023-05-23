import { Component } from '@angular/core';

interface PackageArray {
  id: number;
  title: string;
  description: string;
  img: string;
}

interface Popular {
  id: number;
  title: string;
  img: string;
}

interface Travellers {
  id: number;
  name: string;
  rating: number;
  img: string;
  description: string;
  date: string;
  ubication: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  packageArray: PackageArray[] = [
    {
      id: 1,
      title: 'Cerro de los Siete Colores',
      description:
        'El Cerro de los Siete Colores te espera, encontrá la mejor opción para visitarlo.',
      img: '../../../../../../assets/images/siete-colores.jpg',
    },
    {
      id: 2,
      title: 'Cataratas del Iguazú',
      description:
        'Las Cataratas del Iguazú te espera, encontrá la mejor opción para visitarlo.',
      img: '../../../../../../assets/images/cataratas.jpg',
    },
    {
      id: 3,
      title: 'Glaciar Perito Moreno',
      description:
        'El Glaciar Perito Moreno te espera, encontrá la mejor opción para visitarlo.',
      img: '../../../../../../assets/images/glaciar.jpg',
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

  communityArray: Travellers[] = [
    {
      id: 7,
      img: '../../../../../../assets/images/user1.png',
      name: 'Eliana',
      rating: 4,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nisi nobis ipsa praesentium at labore?',
      date: '22 de abril de 2023',
      ubication: 'Cataratas del Iguazú',
    },
    {
      id: 8,
      img: '../../../../../../assets/images/user2.png',
      name: 'Juancito',
      rating: 5,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nisi nobis ipsa praesentium at labore?',
      date: '10 de junio de 2023',
      ubication: 'Bariloche',
    },
    {
      id: 9,
      img: '../../../../../../assets/images/user3.png',
      name: 'Marquito',
      rating: 3,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nisi nobis ipsa praesentium at labore?',
      date: '15 de enero de 2023',
      ubication: 'Antartida',
    },
    {
      id: 10,
      img: '../../../../../../assets/images/user1.png',
      name: 'Pepito',
      rating: 5,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nisi nobis ipsa praesentium at labore?',
      date: '18 de enero de 2023',
      ubication: 'Buenos Aires',
    },
    {
      id: 11,
      img: '../../../../../../assets/images/user2.png',
      name: 'Robertito',
      rating: 4,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nisi nobis ipsa praesentium at labore?',
      date: '21 de enero de 2023',
      ubication: 'Salta',
    },
  ];
}
