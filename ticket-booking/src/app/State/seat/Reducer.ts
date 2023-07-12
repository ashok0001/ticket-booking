import { createReducer, on } from '@ngrx/store';
import { Seat } from 'src/app/model/seat.model';
import { bookSeats, bookSeatsFailure, bookSeatsSuccess, loadSeats, loadSeatsFailure, loadSeatsSuccess, resetAllBooking, resetAllBookingFailure, resetAllBookingSuccess } from './Actions';

export interface SeatState {
  seats: Seat[];
  bookedSeats:Seat[];
  error: any;
  loading:boolean;

}

const initialState: SeatState = {
  seats: [],
  bookedSeats:[],
  error: null,
  loading:false,
};

export const seatReducer = createReducer(
  initialState,

  on(loadSeats,(state)=>({...state,loading:true})),
  on(loadSeatsSuccess, (state, { seats }) => ({ ...state, seats , loading:false})),
  on(loadSeatsFailure, (state, { error }) => ({ ...state, error,loading:false })),

  on(bookSeats,(state)=>({...state,bookedSeats:[],loading:true})),
  on(bookSeatsSuccess,(state,{bookedSeats})=>({...state,bookedSeats,loading:false})),
  on(bookSeatsFailure,(state,{error})=>({...state,error,loading:false})),


  on(resetAllBooking,(state)=>({...state,loading:true})),
  on(resetAllBookingSuccess,(state,{seats})=>({...state,loading:false})),
  on(resetAllBookingFailure,(state,{error})=>({...state,error,loading:false}))
);
