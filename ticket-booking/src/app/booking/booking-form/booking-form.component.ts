import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent {

  bookingForm: FormGroup=this.formBuilder.group({
    numberOfSeats: [null, Validators.required]
  });
 

 

  
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    
  }


  handleSubmit=()=>{
    if (this.bookingForm.valid) {
      console.log('The number is: ', this.bookingForm.value);
    } else {
      console.log('The number is invalid.');
      // console.log('The number is: ', this.bookingForm.value);
    }
    

  }
}
