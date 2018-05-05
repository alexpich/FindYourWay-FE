import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-question-c',
  templateUrl: './question-c.component.html',
  styleUrls: ['./question-c.component.css']
})
export class QuestionsCComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }
}
