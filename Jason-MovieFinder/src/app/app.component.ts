import { Component } from '@angular/core';
import { MoviesService } from './movies.service';

interface ManuItem {
  id: number;
  name: string;
}

const ManuItems: ManuItem[] =[
  {id:1, name:'Action'},
  {id:2, name:'Adventure'},
  {id:3, name:'Animation'},
  {id:4, name:'Comedy'}
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

  providers:[MoviesService]
})
export class AppComponent {
  title = 'Jason-MovieFinder';
  //genres= ManuItems;
  genres: Array<Object>;

  //Retrive category info from server
  constructor (private http:MoviesService) {
    this.http.getGenres().subscribe(res =>{
      this.genres = res.genres;
      console.log(this.genres)
    })
  }
}
