import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
  inject,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

interface City {
  name: string;
  value: string;
}

interface Data {
  origin: string;
  destination: string;
  departure: string;
  option?: string;
}

interface DataFilter {
  name: string;
  value: string;
}

@Component({
  selector: 'app-form-searcher',
  templateUrl: './form-searcher.component.html',
  styleUrls: ['./form-searcher.component.css'],
})
export class FormSearcherComponent {
  @Output() data = new EventEmitter<Data>();

  @ViewChild('fromSelect') fromSelect!: ElementRef<HTMLSelectElement>;
  @ViewChild('toSelect') toSelect!: ElementRef<HTMLSelectElement>;

  formData!: FormGroup;
  minDate = new Date();
  cities!: City[];

  destination!: DataFilter[];
  origin!: DataFilter[];

  formBuilder = inject(FormBuilder);

  dataService = inject(DataService);

  ngOnInit() {
    this.getOptions();

    this.formData = this.initForm();
  }

  initForm(): FormGroup {
    return this.formBuilder.group({
      from: ['', [Validators.required]],
      to: ['', [Validators.required]],
      date: ['', [Validators.required]],
    });
  }

  onFromSelectionChange() {
    const fromValue = this.fromSelect.nativeElement.value;
    const toValue = this.toSelect.nativeElement.value;

    if (fromValue === toValue) {
      this.formData.patchValue({ to: null });
    }

    // this.toSelect.nativeElement.disabled = false;

    const toOptions = this.toSelect.nativeElement.options;
    for (let i = 0; i < toOptions.length; i++) {
      const option = toOptions[i];
      option.disabled = option.value === fromValue;
    }
  }

  onToSelectionChange() {
    const fromValue = this.fromSelect.nativeElement.value;
    const toValue = this.toSelect.nativeElement.value;

    if (toValue === fromValue) {
      this.toSelect.nativeElement.value = '';
    }
  }

  searchTravel() {
    if (this.formData.invalid) return;

    this.formData.updateValueAndValidity();

    const from = this.formData.value.from;
    const to = this.formData.value.to;

    const date = this.formData.value.date;
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    const dateString = `${year}-${month}-${day}`;

    const body = {
      origin: from,
      destination: to,
      departure: dateString,
    };

    this.data.emit(body);
    this.formData.reset();
  }

  getOptions() {
    const arrayOptions = JSON.parse(sessionStorage.getItem('datos')!);

    const modifiedResponse = arrayOptions.map((item: any) => {
      return {
        ...item,
        origin: item.origin.toLowerCase(),
        destination: item.destination.toLowerCase(),
      };
    });

    const uniqueDestinations = [
      ...new Set(modifiedResponse.map((item: any) => item.destination)),
    ];

    this.destination = uniqueDestinations.map((destination: any) => {
      return {
        name: destination.charAt(0).toUpperCase() + destination.slice(1),
        value: destination,
      };
    });

    const uniqueOrigins = [
      ...new Set(modifiedResponse.map((item: any) => item.origin)),
    ];
    this.origin = uniqueOrigins.map((origin: any) => {
      return {
        name: origin.charAt(0).toUpperCase() + origin.slice(1),
        value: origin,
      };
    });
  }
}
