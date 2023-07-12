import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder, AbstractControl, ValidationErrors, AsyncValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { SeatService } from 'src/app/State/seat/Service';
import { AppState } from 'src/app/model/AppState.model';
import { Seat } from 'src/app/model/seat.model';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent {



  bookingForm: FormGroup=this.formBuilder.group({
    numberOfSeats: [null, Validators.required]
  });
 
 bookedSeats$:Observable<Seat[]>;
 error=''
 

  
  constructor(private formBuilder: FormBuilder,private seatService:SeatService,private store:Store<AppState>) {
    this.bookedSeats$ = this.store.select(state => state.seats.bookedSeats);
    
    this.store.pipe(select((state: AppState) => state)).subscribe((seats) => {
      this.error = seats.seats.error?.error?.error;
      console.log("error from store", this.error);
    });
  }

  ngOnInit() {
    
  }


  handleSubmit=()=>{

    if(this.bookingForm.value.numberOfSeats>7) {
      this.error="you can book max 7 seat at time"
      return
    }
    if(this.bookingForm.value.numberOfSeats<1) {
      this.error="Please Enter A Valid Number"
      return
    }
    this.seatService.bookSeatsHandler(this.bookingForm.value.numberOfSeats)
    
   
  }

  resetAllBooking=()=>{
    this.seatService.resetAllBookingHandler();
  }
}
