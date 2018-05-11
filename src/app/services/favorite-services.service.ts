import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { favoritePK } from '../models/favorite';
import { User } from '../models/user';

const API_URL = environment.apiUrl;
const HTTP_OPTIONS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class FavoriteServicesService {

  constructor(private http: HttpClient) { }

  u = JSON.parse(localStorage.getItem('credential'));
  favorite = new favoritePK;

  public insertFavorite(value: String) {
    // console.log(this.u);
    this.favorite.userId = this.u.userId;
    this.favorite.placeId = value;
    // console.log(this.favorite);
    const json = JSON.stringify(this.favorite);
    const json2 = `{"favoritePK":${json}}`;
    // console.log(json2);
    return this.http.post<favoritePK>(API_URL + 'favorite', json2, HTTP_OPTIONS);
  }
  public getAllFavorites(user: User) {
    console.log( this.u.userId);

    return this.http.get(API_URL + 'favorite/' + user.userId);
  }
  public deleteFavorite(value: String) {

    // console.log(value);
    const json = JSON.stringify(value);
    // console.log(json);
    const json2 = `{"favoritePK":${json}}`;
    console.log(json2);

    const HTTP_OPTIONS2 = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body : json2
    };

     console.log(HTTP_OPTIONS2);
    // const json = JSON.stringify(this.favorite);
    return this.http.delete<favoritePK>(API_URL + 'favorite', HTTP_OPTIONS2);
  }
}
