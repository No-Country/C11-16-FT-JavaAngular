import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {
  DataFormFilter,
  SearchDestination,
} from 'src/app/interfaces/data-form.interface';
import { TripModifie } from 'src/app/interfaces/trip_interface';
import { DataService } from 'src/app/services/data.service';
import { WindowSizeServiceService } from 'src/app/services/window-size-service.service';

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
  travellsArray!: TripModifie[];
  screenWidth!: number;

  visible!: boolean;

  rangeValues: number[] = [0, 10000];

  formRange!: FormGroup;

  formBuilder = inject(FormBuilder);
  dataService = inject(DataService);
  windowSizeService = inject(WindowSizeServiceService);

  ngOnInit() {
    window.scroll(0, 1009);

    this.dataService.formData$.subscribe((formData) => {
      this.searchTrip(formData!);
    });

    this.getScreenWidth();

    this.formRange = this.initFormRange();
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
    { name: 'Un adulto', adults: 1, children: 0 },
    { name: 'Dos adultos', adults: 2, children: 0 },
    {
      name: 'Dos adultos con dos menores',
      adults: 2,
      children: 2,
    },
    { name: 'Pet Friendly', allowspets: true },
    { name: 'Cuatro adultos', adults: 4, children: 0 },
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
    if (sessionStorage.getItem('datos') && formData === null) {
      this.travellsArray = JSON.parse(sessionStorage.getItem('datos')!);
    } else {
      this.dataService.searchTrip(formData).subscribe((data) => {
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

  getScreenWidth() {
    this.windowSizeService.screenWidth$.subscribe((width: number) => {
      this.screenWidth = width;

      if (this.screenWidth > 1000) {
        this.visible = false;
      }
    });
  }

  showDialog() {
    this.visible = true;
  }

  selectOption(destination?: any) {
    this.dataService.setFormData({ destination });
  }

  selectOption2(option: any) {
    this.dataService.setFormData(null);
    const formData: DataFormFilter = {};

    if (option.destination) {
      formData.destination = option.destination;
    }

    if (option.children) {
      formData.children = option.children;
    }

    if (option.adults) {
      formData.adults = option.adults;
    }

    if (option.allowspets) {
      formData.allowspets = option.allowspets;
    }

    if (option.to) {
      formData.to = option.to;
    }
    this.dataService.setFormData(formData);
  }

  initFormRange(): FormGroup {
    return this.formBuilder.group({
      to: [''],
    });
  }

  onRangeChange(event: any) {
    this.dataService.setFormData(null);

    this.selectOption2(event);
  }
}
