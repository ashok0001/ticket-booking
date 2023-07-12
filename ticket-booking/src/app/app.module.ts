import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookingComponent } from './booking/booking.component';
import { SetsComponent } from './booking/sets/sets.component';
import { BookingFormComponent } from './booking/booking-form/booking-form.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { seatReducer } from './State/seat/Reducer';


@NgModule({
  declarations: [
    AppComponent,
    BookingComponent,
    SetsComponent,
    BookingFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({ seats: seatReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
