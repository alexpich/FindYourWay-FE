import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-question-b',
  templateUrl: './question-b.component.html',
  styleUrls: ['./question-b.component.css']
})
export class QuestionBComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }

}
