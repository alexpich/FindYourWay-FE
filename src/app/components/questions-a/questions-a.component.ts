import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
@Component({
  selector: 'app-questions-a',
  templateUrl: './questions-a.component.html',
  styleUrls: ['./questions-a.component.css']
})
export class QuestionsAComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }
}
