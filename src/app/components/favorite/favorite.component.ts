
import { Component, OnInit, ViewChild } from '@angular/core';

import { FavoriteServicesService } from '../../services/favorite-services.service';
import { Http, Response } from '@angular/http';
import { favoritePK } from '../../models/favorite';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { } from '@types/googlemaps';
import { stringify } from '@angular/compiler/src/util';

const HTTP_OPTIONS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;
  private apiURL = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=';
  private userLocation = JSON.parse(localStorage.getItem('credential')).location;
  private userLat = this.userLocation.slice(0, 9);
  private userLng = this.userLocation.slice(10, 19);
  private radius = 'radius=15000';
  private type = 'type=restaurants';
  private keyword = 'keyword=seafood';
  private apiKey = 'key=AIzaSyCXFRdeNA0TxToiWGlTVjOOMDbW1D1FNE4';

  private wholeURL = this.apiURL + this.userLocation + '&' + this.radius + '&' + this.type + '&' + this.keyword + '&' + this.apiKey;
  data: any = {};


  favList = favoritePK;
  item: number;
  constructor(private http: Http, private favoriteServiceService: FavoriteServicesService) {
  }

  ngOnInit() {
    this.favoriteServiceService.getAllFavorites().subscribe(tableinfo => {
      localStorage.setItem('tables', JSON.stringify(tableinfo));
      this.favList = JSON.parse(localStorage.getItem('tables'));
      this.getPlaces();
      this.getData();
      // console.log(this.favList[0].favoritePK.placeId);
    });
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
    for (let j = 0; j < this.favList.length; j++) {
      for (let i = 0; i < this.data.results.length; i++) {
        if (this.favList[j].favoritePK.placeId === this.data.results[i].place_id) {
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
    }
  }
  delete(value) {
    // console.log(value);
    this.favoriteServiceService.deleteFavorite(value).subscribe(fav => {
      if (fav == null) {
        alert('Deleted');
      }
    });
  }
}
