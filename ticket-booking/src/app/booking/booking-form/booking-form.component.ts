import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
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
 

  
  constructor(private formBuilder: FormBuilder,private seatService:SeatService,private store:Store<AppState>) {
    this.bookedSeats$ = this.store.select(state => state.seats.bookedSeats);
  }

  ngOnInit() {
    
  }


  handleSubmit=()=>{
    if (this.bookingForm.valid) {
      this.seatService.bookSeatsHandler(this.bookingForm.value.numberOfSeats)
      console.log('The number is: ', this.bookingForm.value);
    } else {
      console.log('The number is invalid.');
      // console.log('The number is: ', this.bookingForm.value);
    }
  }

  resetAllBooking=()=>{
    this.seatService.resetAllBookingHandler();
  }
}
