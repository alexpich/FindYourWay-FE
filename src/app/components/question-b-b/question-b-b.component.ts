import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-question-b-b',
  templateUrl: './question-b-b.component.html',
  styleUrls: ['./question-b-b.component.css']
})
export class QuestionBBComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }

}
