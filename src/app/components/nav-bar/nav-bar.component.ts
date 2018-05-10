import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { HelpComponent } from '../help/help.component';
import { CouponComponent } from '../coupon/coupon.component';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import {CommonModule} from '@angular/common';
import {UserService} from '../../services/user-services';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  user = JSON.parse(localStorage.getItem('credential'));
  points: number;
  constructor(private router: Router, private modalService: NgbModal, private users: UserService) {
    if (this.user == null) {
      this.points = 0;
    } else {
      this.points = this.user.points;
    }
   }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }

  openVerticallyCenteredAbout(about) {
    this.modalService.open(about, { centered: true });
  }

  openVerticallyCenteredCoupon(coupon) {
    this.users.updatePoints(this.user, -500);
    this.modalService.open(coupon, {centered: true});
  }

  ngOnInit() {
  }

  isLoggedIn(): boolean {
    return this.users.isLoggedIn();
  }

  logout() {
    localStorage.clear();
  }
}
