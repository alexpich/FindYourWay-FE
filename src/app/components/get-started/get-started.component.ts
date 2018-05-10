import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user-services';
import { Router } from '@angular/router';
@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.css']
})
export class GetStartedComponent implements OnInit {

  constructor(private user: UserService, private router: Router) { }

  ngOnInit() {
  }

  isLoggedin() {
    if (this.user.isLoggedIn() === true) {
      console.log('we logged in');
      this.router.navigate(['questions']);
    } else {
      console.log('we not in');
      this.router.navigate(['login']);
    }
  }
}
