import { createAction, props } from '@ngrx/store';
import { Seat } from 'src/app/model/seat.model';

export const loadSeats = createAction('[Seat] Load Seats');
export const loadSeatsSuccess = createAction(
  '[Seat] Load Seats Success',
  props<{ seats: Seat[] }>()
);
export const loadSeatsFailure = createAction(
  '[Seat] Load Seats Failure',
  props<{ error: any }>()
);


export const bookSeats = createAction(
  '[Seat] Book Seats'
);
export const bookSeatsSuccess = createAction(
  '[Seat] Book Seat Success',
  props<{ bookedSeats: Seat[] }>()
);
export const bookSeatsFailure = createAction(
  '[Seat] Book Seats Failure',
  props<{ error: any }>()
);


export const resetAllBooking = createAction('[Seat] reset all booking');
export const resetAllBookingSuccess = createAction(
  '[Seat] reset all booking success',
  props<{ seats: Seat[] }>()
);
export const resetAllBookingFailure = createAction(
  '[Seat] reset all booking failure',
  props<{ error: any }>()
);
