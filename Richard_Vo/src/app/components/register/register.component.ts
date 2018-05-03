import { Component, OnInit } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  currentLat: String;
  currentLong: String;

  constructor() { }

  ngOnInit() {
  }

  locator() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          this.success(position);
        });
      } else {
        alert('Geolocation is not supported by this browser.');
      }
  }

  success(position) {
      this.currentLat = position.coords.latitude;
      this.currentLong = position.coords.longitude;

      console.log(this.currentLat + ', ' + this.currentLong);
  }
}
