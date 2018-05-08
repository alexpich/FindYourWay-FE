import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { getLocaleDateFormat } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-question-a-a-a',
  templateUrl: './question-a-a-a.component.html',
  styleUrls: ['./question-a-a-a.component.css']
})
export class QuestionAAAComponent implements OnInit {

  private apiURL = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=';
  private location = '28.060,-82.405';
  private radius = 'radius=15000';
  private type = 'type=movie_theater';
  private keyword = 'keyword=movies';
  private apiKey = 'key=AIzaSyAJafx3cfY7TzODG-y-OW3fY4XOiugFqmA';

  private wholeURL = this.apiURL + this.location + '&' + this.radius + '&' + this.type + '&' + this.keyword + '&' + this.apiKey;
  data: any = {};

  constructor(private http: Http) {
    this.getPlaces();
    this.getData();
  }

  ngOnInit() {
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