import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WindowSizeServiceService {
  screenWidthSubject: BehaviorSubject<number> = new BehaviorSubject<number>(
    window.innerWidth
  );
  screenWidth$ = this.screenWidthSubject.asObservable();

  setScreenWidth(width: number) {
    this.screenWidthSubject.next(width);
  }
}
