import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor() { }


  image: HTMLImageElement;
  // images: any[] = [`../../assets/adventure.jpg`];
  counter = 0;

  ngOnInit() {
    // this.image =  document.getElementById('random') as HTMLImageElement;
    // this.image.src = this.images[0];

    // setInterval(() => {
    //   this.nextImage(); }, 4000);
    // }

    // nextImage() {

    //   if (this.counter < 2) {
    //   this.counter++;
    //   } else {
    //     this.counter = 0;
    //   }

    //   this.image.src = this.images[this.counter];
  }

}
