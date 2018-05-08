import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor()  {}


  image: HTMLImageElement;
  images: any[] =  [ `https://images.pexels.com/photos/39803/pexels-photo-39803.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260`,
  'http://xjehl.com/wp-content/uploads/2016/05/generic-people-02-1030x687.jpg',
  'https://lifefm.com.au/wp-content/uploads/sites/280/2017/09/family.jpg' ];
  counter = 0;

  ngOnInit() {
    this.image =  document.getElementById('random') as HTMLImageElement;
    this.image.src = this.images[0];

    setInterval(() => {
      this.nextImage(); }, 4000);
    }

    nextImage() {
      if (this.counter < 2) {
      this.counter++;
      } else {
        this.counter = 0;
      }

      this.image.src = this.images[this.counter];

    }

  }
