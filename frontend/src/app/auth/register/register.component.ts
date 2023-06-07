import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

import { Notify } from 'notiflix';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  imageDefault =
    'https://cdn.discordapp.com/attachments/442011718235848707/1115749841117642852/Diseno_sin_titulo.jpg';

  profilePictureSrc!: string;

  authService = inject(AuthService);
  formBuilder = inject(FormBuilder);
  cookieServer = inject(CookieService);
  route = inject(Router);

  ngOnInit(): void {
    window.scroll(0, 1009);

    this.registerForm = this.initFormRegister();

    this.registerForm
      .get('profile_picture')
      ?.valueChanges.pipe(debounceTime(500))
      .subscribe((value) => {
        console.log('Nuevo valor de profile_picture:', value);
        this.profilePictureSrc = value;
      });
  }

  initFormRegister(): FormGroup {
    return this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]],
      name: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      dni: ['', [Validators.required]],
      profile_picture: [''],
    });
  }

  register() {
    let profile_picture;

    if (this.registerForm.value.profile_picture === '') {
      profile_picture = this.imageDefault;
    } else {
      profile_picture = this.registerForm.value.profile_picture;
    }

    const body = {
      email: this.registerForm.value.email,
      password: this.registerForm.value.password,
      name: this.registerForm.value.name,
      lastname: this.registerForm.value.lastname,
      dni: this.registerForm.value.dni,
      profile_picture,
    };

    if (this.registerForm.invalid) return;

    this.authService.register(body).subscribe((resp) => {});
    this.route.navigate(['/']);
  }

  validatePicture(): string {
    Notify.init({ position: 'right-bottom' });

    Notify.failure('No es una URL de imagen valida');

    return this.imageDefault;
  }
}
