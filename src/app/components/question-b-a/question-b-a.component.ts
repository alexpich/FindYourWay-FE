import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-question-b-a',
  templateUrl: './question-b-a.component.html',
  styleUrls: ['./question-b-a.component.css']
})
export class QuestionBAComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }

}
