import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/user';
import { UserService } from '../../services/user-services';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credential = new User();
  isValid: boolean;
  alert = '';
  infomation: any = {};

  constructor( private userservice: UserService,  private router: Router) { }

  ngOnInit() {

  }

  submit() {
  this.userservice.loginUser(this.credential).subscribe(users => {
    if (users == null) {
      this.isValid = !this.isValid;
      this.alert = 'Incorrect Credentials';
      console.log('we empty');
    } else {
      console.log(users);
      this.userservice.subscriber.next(users);
      users.password = '';
      localStorage.setItem('credential', JSON.stringify(users));
      console.log(JSON.stringify(localStorage.getItem('credential')));
      }
    });
  }
}


