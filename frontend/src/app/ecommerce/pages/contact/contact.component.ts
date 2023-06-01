import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Loading, Notify } from 'notiflix';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  datos!: FormGroup;

  http = inject(HttpClient);

  ngOnInit(): void {
    this.datos = new FormGroup({
      fullName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      subject: new FormControl('', Validators.required),
      tel: new FormControl(''),
      message: new FormControl('', Validators.required),
    });
  }

  envioCorreo() {
    Loading.standard('Enviando correo...');
    let params = {
      nombre: this.datos.value.fullName,
      email: this.datos.value.email,
      asunto: this.datos.value.subject,
      telefono: this.datos.value.tel || 'No ingresó un teléfono',
      mensaje: this.datos.value.message,
    };

    if (this.datos.invalid) {
      Notify.init({ position: 'right-bottom' });
      Loading.remove();
      Notify.failure(
        'Error al enviar el correo, complete todos los campos correctamente'
      );

      return;
    } else {
      this.http
        .post('https://no-country-back-mail.vercel.app/envio', params)
        .subscribe((resp: any) => {
          Loading.remove();
          Notify.init({ position: 'right-bottom' });
          if (this.datos.valid) {
            Notify.success('Correo enviado correctamente');
          }

          this.datos.reset();
        });
    }
  }
}
