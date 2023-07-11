import { Component } from '@angular/core';

@Component({
  selector: 'app-sets',
  templateUrl: './sets.component.html',
  styleUrls: ['./sets.component.css']
})
export class SetsComponent {

  seats=[1];

  constructor(){
    for(let i=1; i<80; i++){
      this.seats.push(i+1)
    }
  }

}
