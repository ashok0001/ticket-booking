import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Seat } from '../model/seat.model';


@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private apiUrl = 'https://thankful-tweed-jacket-fox.cyclic.app/api/seats';

  constructor(private http: HttpClient) { }

  getAllSeats(): Observable<Seat[]> {
    return this.http.get<Seat[]>(this.apiUrl);
  }
}
