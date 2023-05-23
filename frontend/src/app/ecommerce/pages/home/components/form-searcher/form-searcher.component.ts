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
      { name: 'Jujuy', value: 'jujuy' },
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
