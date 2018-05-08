import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

const API_URL = environment.apiUrl;
const HTTP_OPTIONS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class UserService {
    loggedIn: User = JSON.parse(localStorage.getItem('credential'));
    subscriber: BehaviorSubject<User> = new BehaviorSubject<User>(null);
    constructor(private http: HttpClient) {
        const u = localStorage.getItem('user');
        if ( u !== '{}' && u !== undefined) {
            this.subscriber.next(JSON.parse(u));
      }
    }

      public loginUser(user: User) {
        console.log(`Attempting to login user: ${user.username}`);
        const json = JSON.stringify(user);
        console.log(json);
        return this.http.post<User>(API_URL + 'users/login', json, HTTP_OPTIONS);
      }

      isLoggedIn() {
        if (this.loggedIn == null) {
          return false;
        }
        return true;
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
}
