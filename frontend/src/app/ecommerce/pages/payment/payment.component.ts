import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Trip } from 'src/app/interfaces/trip_interface';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  trip!: Trip;

  dateNow!: string;

  paymentForm!: FormGroup;

  taxes = 0.21;

  dataService = inject(DataService);
  route = inject(ActivatedRoute);
  formBuilder = inject(FormBuilder);
  router = inject(Router);

  ngOnInit(): void {
    const fecha = new Date();
    const fechaString = fecha.toLocaleDateString('es-AR');

    this.dateNow = fechaString;

    window.scroll(0, 1009);

    this.route.params.subscribe((params) => {
      // Accede a los parámetros aquí
      const id = params['id'];
      // Realiza las acciones necesarias con los parámetros
      this.dataService.searchTripById(id).subscribe((data) => {
        this.trip = data;
      });
    });

    this.paymentForm = this.initFormPayment();
  }

  initFormPayment(): FormGroup {
    return this.formBuilder.group({
      nameCard: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      numberCard: ['', [Validators.required, Validators.pattern('[0-9]{16}')]],
      expireCard: ['', Validators.required],
      cvvCard: ['', [Validators.required, Validators.pattern('[0-9]{3}')]],
    });
  }

  sendForm(id: any) {
    if (this.paymentForm.invalid) return;

    this.router.navigate(['/resumen/' + id]);
  }
}
