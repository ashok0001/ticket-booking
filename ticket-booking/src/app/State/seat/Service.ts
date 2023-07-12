import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { Seat } from 'src/app/model/seat.model';
import { bookSeats, bookSeatsFailure, bookSeatsSuccess, loadSeats, loadSeatsFailure, loadSeatsSuccess, resetAllBooking, resetAllBookingFailure, resetAllBookingSuccess } from './Actions';

@Injectable({
  providedIn: 'root'
})
export class SeatService {
  [x: string]: any;
  private apiUrl = 'https://thankful-tweed-jacket-fox.cyclic.app/api/seats';
//   private apiUrl='http://localhost:5000/api/seats'

  constructor(private store: Store, private http: HttpClient) { }

  loadAllSeats() {
    this.store.dispatch(loadSeats());

    return this.http.get<Seat[]>(this.apiUrl).pipe(
      map((seats: Seat[]) => loadSeatsSuccess({ seats })),
      catchError(error => of(loadSeatsFailure({ error })))
    ).subscribe(action => this.store.dispatch(action));
  }

  bookSeatsHandler(numberOfSeats:number){
    this.store.dispatch(bookSeats())

    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
      })

    return this.http.put<Seat[]>(`${this.apiUrl}/book`,{numberOfSeats},{headers}).pipe(
        map((seats:Seat[])=>{this.loadAllSeats();
             return bookSeatsSuccess({bookedSeats:seats})}),
        catchError(error=>of(bookSeatsFailure({error})))
    ).subscribe(action=>{
        
        return this.store.dispatch(action)}
    );
  }

  resetAllBookingHandler(){
    this.store.dispatch(resetAllBooking())

    return this.http.put<Seat[]>(`${this.apiUrl}/reset-booking`,{}).pipe(
        map((seats:Seat[])=>resetAllBookingSuccess({seats})),
        catchError(error=>of(resetAllBookingFailure({error})))
    ).subscribe(action=>{
        this.store.dispatch(bookSeats())
        this.loadAllSeats();
         return this.store.dispatch(action)})
  }
}
