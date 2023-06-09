import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Trip } from 'src/app/interfaces/trip_interface';
import { DataService } from 'src/app/services/data.service';

import { Loading, Notify } from 'notiflix';

import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { HttpClient } from '@angular/common/http';

(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

interface Popular {
  id: number;
  title: string;
  img: string;
}

@Component({
  selector: 'app-summary-purchase',
  templateUrl: './summary-purchase.component.html',
  styleUrls: ['./summary-purchase.component.css'],
})
export class SummaryPurchaseComponent implements OnInit {
  trip!: Trip;

  cardNumber!: number;

  dataService = inject(DataService);
  route = inject(ActivatedRoute);
  formBuilder = inject(FormBuilder);
  router = inject(Router);
  http = inject(HttpClient);

  ngOnInit(): void {
    window.scroll(0, 1009);

    this.route.params.subscribe((params) => {
      // Accede a los parámetros aquí
      const id = params['id'];
      // Realiza las acciones necesarias con los parámetros
      this.dataService.searchTripById(id).subscribe((data) => {
        this.trip = data;
      });
    });

    const min = 1000; // El número mínimo de 4 dígitos (1000)
    const max = 9999;

    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    this.cardNumber = randomNumber;
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

  createPdf() {
    const user = JSON.parse(localStorage.getItem('userData')!);

    const pdfDefinitio: any = {
      content: [
        {
          text: 'Tango Viajes',
          style: 'nombreEmpresa',
        },
        {
          text: 'Resumen de compra',
          style: 'resumen',
        },
        {
          text: `Gracias por tu compra ${user.name} ${user.lastname}`,
          style: 'header',
        },
        {
          text: `Hotel: ${this.trip.hotel.title}`,
        },
        { text: `Descripción: ${this.trip.hotel.description}` },
        {
          text: `Abonaste en tu tarjeta Visa Finalizada en ${this.cardNumber}`,
        },
        { text: `Precio: ${this.trip.price}` },
        {
          text: `Total impuestos: $${this.trip.price * 0.21}`,
          style: 'anotherStyle',
        },
        {
          text: `Total abonados: $${this.trip.price * 1.21}`,
          style: 'anotherStyle',
        },
      ],

      styles: {
        resumen: {
          fontSize: 25,
          lineHeight: 4,
          alignment: 'center',
          bold: true,
        },
        nombreEmpresa: {
          fontSize: 30,
          lineHeight: 4,
          alignment: 'right',
          bold: true,
        },
        header: {
          fontSize: 20,
          bold: true,
          lineHeight: 3,
        },
        anotherStyle: {
          italics: true,
          alignment: 'right',
          bold: true,
        },
      },
    };

    const pdfDocGenerator = pdfMake.createPdf(pdfDefinitio);
    pdfDocGenerator.open();
  }

  envioCorreo() {
    Loading.standard('Enviando correo...');

    const data = this.trip;
    const dataUser = JSON.parse(localStorage.getItem('userData')!);
    const card = this.cardNumber;

    let params = {
      data,
      dataUser,
      card,
    };

    if (!params) {
      Notify.init({ position: 'right-bottom' });
      Loading.remove();
      Notify.failure(
        'Error al enviar el correo, complete todos los campos correctamente'
      );

      return;
    } else {
      this.http
        .post('https://no-country-back-mail.vercel.app/enviarPdf', params)
        .subscribe((resp: any) => {
          Loading.remove();
          Notify.init({ position: 'right-bottom' });
          if (params) {
            Notify.success('Correo enviado correctamente');
          }
        });
    }
  }
}
