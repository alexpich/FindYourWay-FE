import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-question-a-a',
  templateUrl: './question-a-a.component.html',
  styleUrls: ['./question-a-a.component.css']
})
export class QuestionAAComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }
}
