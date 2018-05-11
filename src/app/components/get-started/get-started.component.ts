import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user-services';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.css']
})
export class GetStartedComponent implements OnInit {

  loggedin: boolean = (localStorage.getItem('credential') == null) ? false : true;
  constructor(private user: UserService, private router: Router) { }

  ngOnInit() {
    this.user.subscriber.subscribe(loggedin => {
      if (loggedin == null) {
         this.loggedin = false;
       } else {
         this.loggedin = true;
       }
     });
  }

  isLoggedin() {
    this.router.navigate(['questions']);
  }
  isLoggedout() {
    this.router.navigate(['login']);
  }
}
