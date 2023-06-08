import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { AuthResponse, Form, RegisterForm } from '../interfaces/auth.interface';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private myBooleanSubject: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);

  url: string =
    'https://c11-16-ft-javaangular-production.up.railway.app/api/client';

  http = inject(HttpClient);

  login(form: Form): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.url}/login`, form);
  }

  register(form: RegisterForm): Observable<any> {
    return this.http.post<any>(`${this.url}/registerClient`, form);
  }

  getUser(id: string): Observable<User> {
    return this.http.get<User>(`${this.url}/searchId/${id}`);
  }

  getMyBoolean(): Observable<boolean> {
    return this.myBooleanSubject.asObservable();
  }

  setMyBoolean(value: boolean): void {
    this.myBooleanSubject.next(value);
  }
}
