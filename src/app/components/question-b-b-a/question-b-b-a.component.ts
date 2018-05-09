import { Component, OnInit, ViewChild } from '@angular/core';
import { Http, Response } from '@angular/http';
import { getLocaleDateFormat } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { } from '@types/googlemaps';
import { GoogleService } from '../../services/google-services';

@Component({
  selector: 'app-question-b-b-a',
  templateUrl: './question-b-b-a.component.html',
  styleUrls: ['./question-b-b-a.component.css']
})

export class QuestionBBAComponent implements OnInit {

  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  private userLocation = JSON.parse(localStorage.getItem('credential')).location;
  private userLat = this.userLocation.slice(0, 9);
  private userLng = this.userLocation.slice(10, 19);
  private radius = '15000';
  private type = 'restaurants';
  private keyword = 'seafood';
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

  getPlaces() {
    this.google.pQuery(this.userLocation, this.radius, this.type, this.keyword).subscribe(data => {
      console.log(data);
      this.data = data;
      console.log (this.data);
      this.google.getUserMarker(this.map);
      this.google.getAllMarkers(this.data, this.map);
    });
  }

  // getUserMarker() {
  //   const marker = new google.maps.Marker({
  //     position: { lat: Number(this.userLat), lng: Number(this.userLng) },
  //     map: this.map,
  //     title: 'Your location'
  //   });
  // }

  // getAllMarkers() {
  //   for (let i = 0; i < this.data.results.length; i++) {
  //     const populatedLocation = this.data.results[i].geometry.location;
  //     const marker2 = new google.maps.Marker({
  //       animation: google.maps.Animation.DROP,
  //       position: populatedLocation,
  //       map: this.map,
  //       title: this.data.results[i].name
  //     });
  //   }
  // }


}
