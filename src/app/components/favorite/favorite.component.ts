import { Component, OnInit } from '@angular/core';

import { FavoriteServicesService } from '../../services/favorite-services.service';
import { Http, Response } from '@angular/http';
import {favoritePK} from '../../models/favorite';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const HTTP_OPTIONS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {


  favList: favoritePK[];
  item: number;
  constructor(private http: Http, private favoriteServiceService: FavoriteServicesService) {
   }

  ngOnInit() {
   this.favoriteServiceService.getAllFavorites().subscribe(tableinfo => {
     localStorage.setItem('tables', JSON.stringify(tableinfo));
     this.favList = JSON.parse(localStorage.getItem('tables'));
     console.log(this.favList);
   });
  }
  delete(value) {
    // console.log(value);
    this.favoriteServiceService.deleteFavorite(value).subscribe(fav => {
      if (fav == null) {
        alert('Deleted');
    }
    });
  }
}
