
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

@Component({
  selector: 'app-question-b-b-a',
  templateUrl: './question-b-b-a.component.html',
  styleUrls: ['./question-b-b-a.component.css']
})

export class QuestionBBAComponent implements OnInit {
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;


  private apiURL = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=';
  private locations = '28.060,-82.405';
  private radius = 'radius=15000';
  private type = 'type=restaurants';
  private keyword = 'keyword=seafood';
  private apiKey = 'key=AIzaSyAJafx3cfY7TzODG-y-OW3fY4XOiugFqmA';

  private wholeURL = this.apiURL + this.locations + '&' + this.radius + '&' + this.type + '&' + this.keyword + '&' + this.apiKey;
  data: any = {};

  constructor(private http: Http) {
    this.getPlaces();
    this.getData();
  }

  ngOnInit() {
    const mapProp = {
      center: new google.maps.LatLng(28.060, -82.405),
      zoom: 11,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);


  }

  getUserMarker() {
    const marker = new google.maps.Marker({
      position: { lat: 28.060, lng: -82.405 },
      map: this.map,
      title: 'Your location'
    });
  }

  getAllMarkers() {
    // console.log (this.data.results.length);
    for (let i = 0; i < this.data.results.length; i++) {
      const populatedLocation = this.data.results[i].geometry.location;
      const marker2 = new google.maps.Marker({
        position: populatedLocation,
        map: this.map,
        title: this.data.results[i].name
      });
    }
  }

  getData() {
    return this.http.get(this.wholeURL)
      .map((res: Response) => res.json());
  }

  getPlaces() {
    this.getData().subscribe(data => {
      console.log(data);
      this.data = data;
    });
  }

}
