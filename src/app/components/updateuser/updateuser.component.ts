import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user-services';
import { User } from '../../models/user';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {

  alert = '';
  updateUser = new User;
  currUser: User = JSON.parse(localStorage.getItem('credential'));
  stringed: string;

  constructor(private userservice: UserService) { }

  ngOnInit() {
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
