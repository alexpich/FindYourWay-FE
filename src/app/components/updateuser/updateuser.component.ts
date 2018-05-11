import { Component, OnInit } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { UserService } from '../../services/user-services';
import { User } from '../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {

  alert: String = null;
  updateUser = new User();
  currUser: User;
  stringed: string;
  loggedin: boolean = (localStorage.getItem('credential') == null) ? false : true;
  currentLat: String;
  currentLong: String;
  constructor(private userservice: UserService, private router: Router) {
    if (localStorage.getItem('credential') == null) {
      this.currUser = new User;
    } else {
      this.currUser = JSON.parse(localStorage.getItem('credential'));
      const userLat = Number(this.currUser.location.slice(0, 9));
      const userLng = Number(this.currUser.location.slice(10, 19));
    }
  }

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
    this.updateUser = this.currUser;
    this.userservice.updatesUser(this.updateUser).subscribe(users => {
      if (users === null) {
        this.alert = 'Could not update';
      } else {
        this.alert = 'Update complete!';
        this.stringed = JSON.stringify(this.updateUser);
        console.log(this.stringed);
        localStorage.setItem('credential', this.stringed);
        this.router.navigate(['home']);

      }
    });
  }
}
