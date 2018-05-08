import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-question-a-c',
  templateUrl: './question-a-c.component.html',
  styleUrls: ['./question-a-c.component.css']
})
export class QuestionACComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }
}
