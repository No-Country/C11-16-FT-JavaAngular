import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthButtonService {
  authHeader = signal<boolean>(false);

  public set setValue(v: boolean) {
    this.authHeader.set(v);
  }

  constructor() {}
}
