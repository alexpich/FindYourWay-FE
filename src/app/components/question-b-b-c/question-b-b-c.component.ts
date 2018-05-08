import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { getLocaleDateFormat } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const HTTP_OPTIONS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Component({
  selector: 'app-question-b-b-c',
  templateUrl: './question-b-b-c.component.html',
  styleUrls: ['./question-b-b-c.component.css']
})
export class QuestionBBCComponent implements OnInit {

  private apiURL = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=';
  private location = '28.060,-82.405';
  private radius = 'radius=15000';
  private type = 'type=restaurants';
  private keyword = 'keyword=steak';
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
