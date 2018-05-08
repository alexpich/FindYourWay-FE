import { Component, OnInit } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { User } from '../../models/user';
import { UserService} from '../../services/user-services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  currentLat: String;
  currentLong: String;

  regUser = new User();
  alert = '';
  clocation: string;


  constructor(private userservice: UserService, private router: Router) { }

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

  submit() {
    this.clocation = this.currentLat + ',' + this.currentLong;
    this.regUser.location = this.clocation;
    this.regUser.points = '0';
    this.userservice.createUser(this.regUser).subscribe(users => {
        if (users === null) {
          this.alert = 'Could not complete registration';
        } else {
          this.alert = 'Registration is complete';
        }
      });

  }
}
