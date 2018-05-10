import { Component, OnInit, ViewChild } from '@angular/core';
import { Http, Response } from '@angular/http';
import { getLocaleDateFormat } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { } from '@types/googlemaps';

const HTTP_OPTIONS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

import { GoogleService } from '../../services/google-services';

@Component({
  selector: 'app-question-b-b-a',
  templateUrl: './question-b-b-a.component.html',
  styleUrls: ['./question-b-b-a.component.css']
})

export class QuestionBBAComponent implements OnInit {

  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  // list of items
  private apiURL = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=';
  private userLocation = JSON.parse(localStorage.getItem('credential')).location;
  private userLat = this.userLocation.slice(0, 9);
  private userLng = this.userLocation.slice(10, 19);
  private radius = 'radius=15000';
  private type = 'type=restaurants';
  private keyword = 'keyword=seafood';
  private apiKey = 'key=AIzaSyCVxPwgdh1ngz2yUsGyaUN-jN0WNYDBoaw';

  // photos
  // private photoUrl = 'https://maps.googleapis.com/maps/api/place/photo?';
  // private photoWidth = 'maxwidth=100';
  // private photoReference = '';
  // private wholePhotoURL = this.photoUrl + this.photoWidth + '&' + this.photoReference;



  private wholeURL = this.apiURL + this.userLocation + '&' + this.radius + '&' + this.type + '&' + this.keyword + '&' + this.apiKey;

  data: any = {};

  constructor(private http: Http, private google: GoogleService) {
    this.getPlaces();

  }

  ngOnInit() {
    const mapProp = {
      center: new google.maps.LatLng(Number(this.userLat), Number(this.userLng)),
      zoom: 11,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    google.maps.event.trigger(this.map, 'resize');
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
  }

  getData() {
    return this.http.get(this.wholeURL)
      .map((res: Response) => res.json());
  }

  getPlaces() {
    this.google.pQuery(this.userLocation, this.radius, this.type, this.keyword).subscribe(data => {
      console.log(data);
      this.data = data;
      // console.log(data.results.photos[0].photoreference);
    });
  }

  getUserMarker() {
    const marker = new google.maps.Marker({
      position: { lat: Number(this.userLat), lng: Number(this.userLng) },
      map: this.map,
      title: 'Your location'

    });
    marker.setIcon('http://maps.google.com/mapfiles/ms/icons/green-dot.png');
  }

  getAllMarkers() {
    for (let i = 0; i < this.data.results.length; i++) {
      const populatedLocation = this.data.results[i].geometry.location;
      const marker2 = new google.maps.Marker({
        animation: google.maps.Animation.DROP,
        position: populatedLocation,
        map: this.map,
        title: this.data.results[i].name
      });
    }
  }
}
