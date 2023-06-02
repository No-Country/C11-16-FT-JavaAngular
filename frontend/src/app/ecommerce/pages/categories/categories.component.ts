import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

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
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent {
  form!: FormGroup;
  form3!: FormGroup;

  formBuilder = inject(FormBuilder);

  ngOnInit() {
    this.form = new FormGroup({});

    for (const option of this.options) {
      this.form.addControl(option.value, new FormControl(false));
    }

    // Suscribirse a los cambios del formulario reactivo
    this.form.valueChanges.subscribe((values) => {
      console.log(values); // Valores seleccionados
    });

    this.form3 = new FormGroup({});

    for (const option of this.options2) {
      this.form3.addControl(option.value, new FormControl(false));
    }

    // Suscribirse a los cambios del formulario reactivo
    this.form3.valueChanges.subscribe((values) => {
      console.log(values); // Valores seleccionados
    });
  }

  options = [
    { name: 'Formosa', value: 'formosa' },
    { name: 'Buenos Aires', value: 'buenos aires' },
    { name: 'Santa Fe', value: 'santa fe' },
    { name: 'Salta', value: 'salta' },
    { name: 'Misiones', value: 'misiones' },
    { name: 'San Luis', value: 'san luis' },
    { name: 'San Juan', value: 'san juan' },
    { name: 'Entre Ríos', value: 'entre rios' },
    { name: 'Santa Cruz', value: 'santa cruz' },
    { name: 'Río Negro', value: 'rio negro' },
    { name: 'Chubut', value: 'chubut' },
    { name: 'Córdoba', value: 'cordoba' },
    { name: 'Mendoza', value: 'mendoza' },
    { name: 'La Rioja', value: 'la rioja' },
    { name: 'Catamarca', value: 'catamarca' },
    { name: 'La Pampa', value: 'la pampa' },
    { name: 'Santiago del Estero', value: 'santiago del estero' },
    { name: 'Corrientes', value: 'corrientes' },
    { name: 'Santa Fe', value: 'santa fe' },
    { name: 'Tucumán', value: 'tucuman' },
    { name: 'Neuquén', value: 'neuquen' },
    { name: 'Chaco', value: 'chaco' },
    { name: 'CABA', value: 'caba' },
    { name: 'Tierra del Fuego', value: 'tierra del fuego' },
  ];

  options2 = [
    { name: 'Un adulto', value: 'un adulto' },
    { name: 'Dos adultos', value: 'dos adultos' },
    {
      name: 'Grupo familiar con 2 menores',
      value: 'grupo familiar con dos menores',
    },
    { name: 'Pet Friendly', value: 'pet friendly' },
    { name: 'Cuatro adultos', value: 'cuatro adultos' },
    { name: 'Pet Friendly', value: 'pet friendly' },
    { name: 'Pet Friendly', value: 'pet friendly' },
    { name: 'Pet Friendly', value: 'pet friendly' },
    { name: 'Pet Friendly', value: 'pet friendly' },
    { name: 'Pet Friendly', value: 'pet friendly' },
    { name: 'Pet Friendly', value: 'pet friendly' },
    { name: 'Pet Friendly', value: 'pet friendly' },
  ];

  travellsArray = [
    {
      id: 1,
      title: 'Hotel Llao Llao',
      location: 'San Carlos de Bariloche',
      option: 'Dos adultos',
      days: '7 días - 8 noches',
      price: 105999,
    },
    {
      id: 2,
      title: 'Hotel Titan',
      location: 'Calafate',
      option: '2 adultos, 2 menores',
      days: '10 días - 9 noches',
      price: 230599,
    },
    {
      id: 3,
      title: 'Hotel Madero ',
      location: 'CABA, Buenos Aires',
      option: 'Un adulto',
      days: '5 días - 5 noches',
      price: 99999,
    },
    {
      id: 4,
      title: 'Sofitel La Reserva',
      location: 'Cardales',
      option: 'Grupo familiar con 2 menores',
      days: '6 días - 6 noches',
      price: 24599,
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
