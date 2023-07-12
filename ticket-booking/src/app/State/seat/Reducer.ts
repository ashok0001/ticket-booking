import { createReducer, on } from '@ngrx/store';
import { Seat } from 'src/app/model/seat.model';
import { bookSeats, bookSeatsFailure, bookSeatsSuccess, loadSeatsFailure, loadSeatsSuccess, resetAllBookingFailure, resetAllBookingSuccess } from './Actions';

export interface SeatState {
  seats: Seat[];
  bookedSeats:Seat[];
  error: any;

}

const initialState: SeatState = {
  seats: [],
  bookedSeats:[],
  error: null
};

export const seatReducer = createReducer(
  initialState,
  
  on(loadSeatsSuccess, (state, { seats }) => ({ ...state, seats })),
  on(loadSeatsFailure, (state, { error }) => ({ ...state, error })),

  on(bookSeats,(state)=>({...state,bookedSeats:[]})),
  on(bookSeatsSuccess,(state,{bookedSeats})=>({...state,bookedSeats})),
  on(bookSeatsFailure,(state,{error})=>({...state,error})),

  on(resetAllBookingSuccess,(state,{seats})=>({...state,seats})),
  on(resetAllBookingFailure,(state,{error})=>({...state,error}))
);
