
import { Component, OnInit, ViewChild } from '@angular/core';
import { Http, Response } from '@angular/http';
import { getLocaleDateFormat } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { } from '@types/googlemaps';
import { FavoriteServicesService } from '../../services/favorite-services.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

const HTTP_OPTIONS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Component({
  selector: 'app-question-a-c-a',
  templateUrl: './question-a-c-a.component.html',
  styleUrls: ['./question-a-c-a.component.css']
})
export class QuestionACAComponent implements OnInit {

  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;
  private apiURL = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=';
  private userLocation = JSON.parse(localStorage.getItem('credential')).location;
  private userLat = this.userLocation.slice(0, 9);
  private userLng = this.userLocation.slice(10, 19);
  private radius = 'radius=15000';
  private type = 'type=amusement_park';
  private keyword = 'keyword=amusement_park';
  private apiKey = 'key=AIzaSyCVxPwgdh1ngz2yUsGyaUN-jN0WNYDBoaw';

  private wholeURL = this.apiURL + this.userLocation + '&' + this.radius + '&' + this.type + '&' + this.keyword + '&' + this.apiKey;
  data: any = {};

  constructor(private http: Http, private favoriteServiceService: FavoriteServicesService) {
    this.getPlaces();
    this.getData();
  }

  ngOnInit() {
    const mapProp = {
      center: new google.maps.LatLng(Number(this.userLat), Number(this.userLng)),
      zoom: 11,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
  }

  getData() {
    return this.http.get(this.wholeURL)
      .map((res: Response) => res.json());
  }

  getPlaces() {
    this.getData().subscribe(data => {
      console.log(data);
      this.data = data;
      this.getUserMarker();
      this.getAllMarkers();
    });
  }

  getUserMarker() {
    const marker = new google.maps.Marker({
      position: { lat: Number(this.userLat), lng: Number(this.userLng) },
      map: this.map,
      title: 'Your location'
    });
  }

  getAllMarkers() {
    for (let i = 0; i < this.data.results.length; i++) {
      const populatedLocation = this.data.results[i].geometry.location;
      const photo = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=
                      ${this.data.results[i].photos[0].photo_reference}&${this.apiKey}`;
      const rate = this.data.results[i].rating;
      const address = this.data.results[i].vicinity;
      const marker2 = new google.maps.Marker({
        position: populatedLocation,
        map: this.map,
        title: this.data.results[i].name,
        icon: this.data.results[i].icon
      });
      const contentString = `<img src = "${photo}" width="100" height="100">
                              <h4>${marker2.getTitle()}</h4>
                              <h5>Rating: ${rate}</h5>
                              <h6>Address: ${address}</h6>`;
      const infowindow = new google.maps.InfoWindow({
        content: contentString
      });
      marker2.addListener('click', function () {
        // alert('Simple Component\'s function...' + marker2.getTitle());
        infowindow.open(this.map, marker2);
      });
    }
  }
  submit(value) {
    if (this.favoriteServiceService.insertFavorite(value).subscribe()) {
      alert('Place saved to your Favorites');
    }
  }
}
