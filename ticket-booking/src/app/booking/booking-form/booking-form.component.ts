import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder, AbstractControl, ValidationErrors, AsyncValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
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
 error:String='';
 

  
  constructor(private formBuilder: FormBuilder,private seatService:SeatService,private store:Store<AppState>) {
    this.bookedSeats$ = this.store.select(state => state.seats.bookedSeats);
  }

  ngOnInit() {
    
  }


  handleSubmit=()=>{

    if(this.bookingForm.value.numberOfSeats>7){
      this.error="you can book max 7 seat at time"
      return;
    }
    else if(this.bookingForm.value.numberOfSeats<1 || !this.bookingForm.valid){
      this.error="please enter valid number"
      return;
    }
    
    this.seatService.bookSeatsHandler(this.bookingForm.value.numberOfSeats)
    this.error=''
   
  }

  resetAllBooking=()=>{
    this.seatService.resetAllBookingHandler();
  }
}
