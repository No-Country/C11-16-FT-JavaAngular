import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Trip } from '../interfaces/trip_interface';
import { DataFormFilter } from '../interfaces/data-form.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  http = inject(HttpClient);

  private formDataSubject: BehaviorSubject<DataFormFilter | null> =
    new BehaviorSubject<DataFormFilter | null>(null);

  url: string = 'https://c11-16-ft-javaangular-production.up.railway.app/api';

  searchTrip(params?: {
    origin?: string;
    destination?: string;
    type?: string;
    departure?: string;
    children?: number;
    adults?: number;
    allowspets?: boolean;
    to?: number;
  }) {
    const queryParams = new HttpParams({ fromObject: params });
    return this.http.get<Trip[]>(`${this.url}/trip/listAll`, {
      params: queryParams,
    });
  }

  searchTripById(id: string): Observable<Trip> {
    return this.http.get<Trip>(`${this.url}/trip/id/${id}`);
  }

  get formData$(): Observable<DataFormFilter | null> {
    return this.formDataSubject.asObservable();
  }

  setFormData(formData: DataFormFilter | null): void {
    this.formDataSubject.next(formData);
  }
}
