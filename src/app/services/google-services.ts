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

    private userLocation = JSON.parse(localStorage.getItem('credential')).location;
    private userLat = this.userLocation.slice(0, 9);
    private userLng = this.userLocation.slice(10, 19);

    public pQuery(location: string, radius: string, type: string, keyword: string ) {
      console.log (location, radius, type, keyword);
      console.log ((API_URL + location + '&radius=' + radius + '&type=' + type + '&keyword=' + keyword + key));
      return this.http.get(API_URL + location + '&radius=' + radius + '&type=' + type + '&keyword=' + keyword + key);
  }
  getUserMarker(map: google.maps.Map) {
    const marker = new google.maps.Marker({
      position: { lat: Number(this.userLat), lng: Number(this.userLng) },
      map: map,
      title: 'Your location'
    });
  }

  getAllMarkers(data: any, map:google.maps.Map ) {
    for (let i = 0; i < data.results.length; i++) {
      const populatedLocation = data.results[i].geometry.location;
      const marker2 = new google.maps.Marker({
        animation: google.maps.Animation.DROP,
        position: populatedLocation,
        map: map,
        title: data.results[i].name
      });
    }

}
