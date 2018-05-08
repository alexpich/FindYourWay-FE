import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';

const API_URL = environment.apiUrl2;
const HTTP_OPTIONS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

const key = '&key=AIzaSyCdqdvLltSNRK-3iAbIFK3XBRUqTvP4F-k';

@Injectable()
export class GoogleService {

    constructor (private http: HttpClient) {}

    public qSearch(location: string, radius: string, type: string, keyword: string ) {
        return this.http.get(API_URL + location + radius + type + keyword + key);
    }
}



