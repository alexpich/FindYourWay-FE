import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subscriber } from 'rxjs/Subscriber';

const API_URL = environment.apiUrl;
const HTTP_OPTIONS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class UserService {
  loggedIn: User = JSON.parse(localStorage.getItem('credential'));
  subscriber: BehaviorSubject<User> = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('null')));
  constructor(private http: HttpClient) {
    const u = localStorage.getItem('credential');
    if (u !== '{}' && u !== undefined) {
      this.subscriber.next(JSON.parse(u));
    }
  }

  public loginUser(user: User) {
    console.log(`Attempting to login user: ${user.username}`);
    const json = JSON.stringify(user);
    console.log(json);
    return this.http.post<User>(API_URL + 'users/login', json, HTTP_OPTIONS);
  }

  public getAllUsers() {
    return this.http.get(API_URL + `users`);
  }

  public updatesUser(user: User) {
    console.log(`Updating user: ${user.username}`);
    const json = JSON.stringify(user);
    console.log(user.userId);
    return this.http.put<User>(API_URL + `users`, json, HTTP_OPTIONS);
  }

  public createUser(user: User) {
    console.log(`Creating a user  ${user.username}`);
    const json = JSON.stringify(user);
    console.log(json);
    return this.http.post<User>(API_URL + 'users', json, HTTP_OPTIONS);
  }

  public delUser(user: User) {
    // console.log(value);
    const json = JSON.stringify(user);

    const HTTP_OPTIONS2 = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: json
    };

    console.log(HTTP_OPTIONS2);
    // const json = JSON.stringify(this.favorite);
    return this.http.delete<User>(API_URL + 'users', HTTP_OPTIONS2);
  }

  public updatePoints(user: User, points: number) {
    user.points = user.points + points;
    const pass = localStorage.getItem('password');
    user.password = pass;
    console.log(`Updating points.  You now have: ${user.points}`);
    this.updatesUser(user).subscribe(uuser => {
      user = uuser;
      localStorage.setItem('credential', JSON.stringify(user));
      console.log(user);
  });
  }
}
