import { Component, OnInit } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { UserService } from '../../services/user-services';
import { User } from '../../models/user';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {

  alert = '';
  updateUser = new User();
  currUser: User;
  stringed: string;
  loggedin: boolean = (localStorage.getItem('credential') == null) ? false : true;
  currentLat: String;
  currentLong: String;
  constructor(private userservice: UserService) {
    if (localStorage.getItem('credential') == null) {
      this.currUser = new User;
    } else {
      this.currUser = JSON.parse(localStorage.getItem('credential'));
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
    console.log(this.currUser);
    this.updateUser = this.currUser;
    this.userservice.updatesUser(this.updateUser).subscribe(users => {
        if (users === null) {
          this.alert = 'Could not update';
        } else {
          this.alert = 'Update complete!';
          this.stringed = JSON.stringify(this.updateUser);
          console.log(this.stringed);
          localStorage.setItem('credential', this.stringed);
        }
      });
  }
}
