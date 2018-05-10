import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user-services';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  users: User[];
  loggedUser = JSON.parse(localStorage.getItem('credential'));

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getAllUsers().subscribe(tableinfo => {
      localStorage.setItem('credential', JSON.stringify(tableinfo));
      this.users = JSON.parse(localStorage.getItem('credential'));
      console.log(this.users);
    });
  }

  delete(user) {
    this.userService.delUser(user).subscribe(usr => {
      if (usr == null) {
        alert('Deleted');
      }
    });
  }

}
