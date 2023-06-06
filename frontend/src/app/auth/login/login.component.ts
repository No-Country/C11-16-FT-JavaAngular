import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { CookieService } from 'ngx-cookie-service';

import jwt_decode from 'jwt-decode';
import { Payload } from '../interfaces/auth.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  authService = inject(AuthService);
  formBuilder = inject(FormBuilder);
  cookieServer = inject(CookieService);
  router = inject(Router);

  @Output() showLogin = new EventEmitter<boolean>();

  emitValue() {
    this.showLogin.emit(false);
  }

  ngOnInit(): void {
    this.loginForm = this.initFormLogin();
  }

  initFormLogin(): FormGroup {
    return this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  login() {
    if (this.loginForm.invalid) return;

    this.authService.login(this.loginForm.value).subscribe((resp) => {
      this.cookieServer.set('accessToken', resp.accessToken);
      this.getUserData(resp.accessToken);

      if (this.router.routerState.snapshot.url === '/registrarse') {
        this.router.navigate(['/']);
      }
    });
  }

  getUserData(accessToken: string) {
    const decoded: Payload = jwt_decode(accessToken);
    this.authService.getUser(decoded.id).subscribe((resp) => {
      localStorage.setItem('userData', JSON.stringify(resp));
      this.authService.setMyBoolean(true);
    });
  }
}
