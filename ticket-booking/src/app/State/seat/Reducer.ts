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

  on(loadSeats,(state)=>({...state,loading:true, error:null})),
  on(loadSeatsSuccess, (state, { seats }) => ({ ...state, seats , loading:false, error:null})),
  on(loadSeatsFailure, (state, { error }) => ({ ...state, error,loading:false })),

  on(bookSeats,(state)=>({...state,bookedSeats:[],loading:true, error:null})),
  on(bookSeatsSuccess,(state,{bookedSeats})=>({...state,bookedSeats,loading:false, error:null})),
  on(bookSeatsFailure,(state,{error})=>({...state,error,loading:false})),


  on(resetAllBooking,(state)=>({...state,loading:true, error:null})),
  on(resetAllBookingSuccess,(state,{seats})=>({...state,loading:false, error:null})),
  on(resetAllBookingFailure,(state,{error})=>({...state,error,loading:false}))
);
