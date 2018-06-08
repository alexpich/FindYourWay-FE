import { Component, OnInit } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { User } from '../../models/user';
import { UserService } from '../../services/user-services';
import { Router } from '@angular/router';
import { isUndefined } from 'util';

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
    this.currentLat = this.currentLat.substr(0, 7);
    this.currentLong = this.currentLong.substr(8, this.currentLong.length);

    console.log(this.currentLat + ', ' + this.currentLong);
  }

  submit() {
    const role = document.getElementById('role') as HTMLInputElement;
    this.regUser.points = 0;
    this.regUser.roleId = 1;
    this.clocation = this.currentLat + ',' + this.currentLong;
    this.regUser.location = this.clocation;
    if (this.currentLat === undefined && this.currentLong === undefined) {
      this.currentLat = '0';
      this.currentLong = '0';
    }
    this.clocation = this.currentLat + ',' + this.currentLong;
    this.regUser.location = this.clocation;
    // this.regUser.points = '0';
    console.log(this.regUser);
    this.userservice.createUser(this.regUser).subscribe(users => {

      if (users === undefined) {
        console.log('we in null');
        this.alert = 'Could not complete registration';
      } else {
        console.log('we in else');
        this.router.navigate(['login']);
      }
    });

  }
}
