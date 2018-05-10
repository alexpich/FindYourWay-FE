import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { favoritePK } from '../models/favorite';

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

}
