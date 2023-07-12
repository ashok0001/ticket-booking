import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BookingService } from 'src/app/Services/booking.service';
import { SeatState } from 'src/app/State/seat/Reducer';
import { SeatService } from 'src/app/State/seat/Service';
import { AppState } from 'src/app/model/AppState.model';
import { Seat } from 'src/app/model/seat.model';

@Component({
  selector: 'app-sets',
  templateUrl: './sets.component.html',
  styleUrls: ['./sets.component.css']
})
export class SetsComponent {

  seats: Seat[]=[];
  isLoading$:Observable<boolean>;

  constructor(private seatService: SeatService,private store:Store<AppState>) {
    this.isLoading$=this.store.select(store=>store.seats.loading);
   }

  ngOnInit() {
    this.seatService.loadAllSeats(); // Call the method to initiate seat loading
    this.store.pipe(select((state: AppState) => state)).subscribe((seats) => {
      this.seats = seats.seats.seats;
      console.log("seats from store", seats);
    });
    
  }

}
