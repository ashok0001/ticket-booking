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

export const bookSeats = createAction('[Seat] Book Seats',props<{numberOfSeats:number}>());
export const bookSeatsSuccess = createAction(
  '[Seat] Book Seat Success',
  props<{ bookedSeats: Seat[] }>()
);
export const bookSeatsFailure = createAction(
  '[Seat] Book Seats Failure',
  props<{ error: any }>()
);
