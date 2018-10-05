import { Injectable } from '@angular/core';
import  {Jsonp, URLSearchParams } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class MoviesService {
    apikey: string;

    constructor(private _jsonp: Jsonp) {
        //apikey is the token for api.themoviedb.org
        this.apikey = "fed69657ba4cc6e1078d2a6a95f51c8c";
    }

    //Retrive the catogary info from api.thmoviedb.org
    public  getGenres() {
        var search = new URLSearchParams();
        search.set('language', 'en-US');
        search.set('api_key', this.apikey);
        return this._jsonp.get('https://api.themoviedb.org/3/genre/movie/list?callback=JSONP_CALLBACK', {search})
          .map(res => {
            return res.json();
        })
    }

    //Retrive movie list according to a genre
    public getMoviesByGenre (id: string) {
        var search = new URLSearchParams();
        search.set('api_key', this.apikey);
        return this._jsonp.get('https://api.themoviedb.org/3/genre/'+ id +'/movies?callback=JSONP_CALLBACK', {search})
          .map(res => {
            return res.json();
          })
    }

    //Retrive top rate movies list 
    public getTopRatedMovies() {
        var search = new URLSearchParams();
        search.set('api_key', this.apikey);
        return this._jsonp.get('https://api.themoviedb.org/3/movie/top_rated?callback=JSONP_CALLBACK', {search})
          .map(res => {
            return res.json();
          })
    }
}