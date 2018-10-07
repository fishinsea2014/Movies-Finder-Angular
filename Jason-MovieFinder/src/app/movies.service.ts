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

    //Search movies according to key words
    public searchMovies (searchStr: string) {
        var search = new URLSearchParams();
        search.set('sort_by','popularity.desc');
        search.set('query', searchStr);
        search.set('api_key', this.apikey);
        return this._jsonp.get('https://api.themoviedb.org/3/search/movie?callback=JSONP_CALLBACK', {search})
            .map(res => {
                console.log('searching response', res)
                return res.json();
            })
    }

    //Get upcoming movies list.
    getUpComingMovies() {
        var search = new URLSearchParams();
        search.set('api_key', this.apikey);
        return this._jsonp.get('https://api.themoviedb.org/3/movie/upcoming?callback=JSONP_CALLBACK', {search})
          .map(res => {
            return res.json();
          })
    }

    //Get a profile of a movie
    getMovie(id: string) {
        var search = new URLSearchParams();
        search.set('api_key', this.apikey);
        return this._jsonp.get('https://api.themoviedb.org/3/movie/'+ id +'?callback=JSONP_CALLBACK', {search})
        .map(res => {
            return res.json();
        })
    }
    //Get comment of a movie
    getMovieReviews(id: string) {
        var search = new URLSearchParams();
        search.set('api_key', this.apikey);
        return this._jsonp.get('https://api.themoviedb.org/3/movie/'+ id +'/reviews?callback=JSONP_CALLBACK', {search})
          .map(res => {
            return res.json();
          })
      }
    
      //Get credits of a movie
    getMovieCredits(id: string) {
        var search = new URLSearchParams();
        search.set('api_key', this.apikey);
        return this._jsonp.get('https://api.themoviedb.org/3/movie/'+ id +'/credits?callback=JSONP_CALLBACK', {search})
          .map(res => {
            return res.json();
          })
      }

    //Get the similar movies of a movie
    getSimilarMovies(id: string) {
        var search = new URLSearchParams();
        search.set('api_key', this.apikey);
        return this._jsonp.get('https://api.themoviedb.org/3/movie/'+ id +'/similar?callback=JSONP_CALLBACK', {search})
          .map(res => {
            return res.json();
          })
      }

      //Get the author of a movie
      getPersonDetail(id:string) {
        var search = new URLSearchParams();
        search.set('api_key', this.apikey);
        return this._jsonp.get('https://api.themoviedb.org/3/person/'+ id +'?callback=JSONP_CALLBACK', {search})
          .map(res => {
            return res.json();
          })
      }

      //Get the cast of characters of a movie
      getPersonCast(id:string) {
        var search = new URLSearchParams();
        search.set('api_key', this.apikey);
        return this._jsonp.get('https://api.themoviedb.org/3/person/'+ id +'/movie_credits?callback=JSONP_CALLBACK', {search})
          .map(res => {
            return res.json();
          })
      }
}