import { Injectable } from '@angular/core';
//import { Jsonp, URLSearchParams } from '@angular/http';
import  {Jsonp, URLSearchParams } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class MoviesService {
    apikey: string;

    constructor(private _jsonp: Jsonp) {
        this.apikey = "fed69657ba4cc6e1078d2a6a95f51c8c";
    }

    //Retrive the catogary info from api.thmoviedb.org
    //  public getGenres() {
    //     var searchPara = new URLSearchParams();
    //     searchPara.set('language', 'en-US');
    //     searchPara.set('api_key', this.apikey);
    //     return this._jsonp.get('https://api.themoviedb.org/3/genre/movie/list?callback=JSONP_CALLBACK', {searchPara})
    //         .map(res => {
    //             return res.json();
    //         })         
    //  }
    public  getGenres() {
        var search = new URLSearchParams();
        search.set('language', 'en-US');
        search.set('api_key', this.apikey);
        return this._jsonp.get('https://api.themoviedb.org/3/genre/movie/list?callback=JSONP_CALLBACK', {search})
          .map(res => {
            return res.json();
          })
      }

}