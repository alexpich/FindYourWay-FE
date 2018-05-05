import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-question-a-b',
  templateUrl: './question-a-b.component.html',
  styleUrls: ['./question-a-b.component.css']
})
export class QuestionABComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }
}
