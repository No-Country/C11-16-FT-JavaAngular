import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface City {
  name: string;
  value: string;
}

interface Data {
  from: string;
  to: string;
  date: string;
}

@Component({
  selector: 'app-form-searcher',
  templateUrl: './form-searcher.component.html',
  styleUrls: ['./form-searcher.component.css'],
})
export class FormSearcherComponent {
  @Output() data = new EventEmitter<Data>();

  formData!: FormGroup;
  minDate = new Date();
  cities!: City[];

  formBuilder = inject(FormBuilder);

  ngOnInit() {
    this.cities = [
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

    this.formData = this.initForm();
  }

  initForm(): FormGroup {
    return this.formBuilder.group({
      from: ['', [Validators.required]],
      to: ['', [Validators.required]],
      date: ['', [Validators.required]],
    });
  }

  searchTravel() {
    const from = this.formData.value.from;
    const to = this.formData.value.to;
    const date = this.formData.value.date;

    const body = {
      from,
      to,
      date,
    };

    this.data.emit(body);
  }
}
