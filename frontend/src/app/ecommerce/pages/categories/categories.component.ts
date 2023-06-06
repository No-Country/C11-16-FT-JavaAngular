import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {
  DataFormFilter,
  SearchDestination,
} from 'src/app/interfaces/data-form.interface';
import { TripModifie } from 'src/app/interfaces/trip_interface';
import { DataService } from 'src/app/services/data.service';

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
export class CategoriesComponent implements OnInit, OnDestroy {
  form!: FormGroup;
  form2!: FormGroup;

  formBuilder = inject(FormBuilder);
  dataService = inject(DataService);

  travellsArray!: TripModifie[];

  ngOnInit() {
    window.scroll(0, 1009);

    this.dataService.formData$.subscribe((formData) => {
      this.searchTrip(formData!);
    });
    this.form = new FormGroup({});

    for (const option of this.options) {
      this.form.addControl(option.value, new FormControl(false));
    }

    // Suscribirse a los cambios del formulario reactivo
    this.form.valueChanges.subscribe((values) => {
      console.log(values); // Valores seleccionados
    });

    this.form2 = new FormGroup({});

    for (const option of this.options2) {
      this.form2.addControl(option.value, new FormControl(false));
    }

    // Suscribirse a los cambios del formulario reactivo
    this.form2.valueChanges.subscribe((values) => {
      console.log(values); // Valores seleccionados
    });
  }

  ngOnDestroy() {
    this.dataService.setFormData(null);
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

  searchTrip(formData: DataFormFilter) {
    this.dataService.searchTrip(formData).subscribe((data) => {
      console.log(data);

      this.travellsArray = data.map((trip) => {
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
      });
    });
  }
}
