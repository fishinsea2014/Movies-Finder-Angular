import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';
import { Location } from '@angular/common';

@Component({
    selector: 'my-detail',
    templateUrl:'./detail.component.html',
    styleUrls: ['./detail.component.css'],
    providers:[MoviesService]
})

export class DetailComponent {
    constructor(private router:ActivatedRoute,
                private http:MoviesService,
                private location:Location){}

    reviews: Array<Object>;
    movie: Object;
    cast: Array<Object>;
    similarMovies: Array<Object>;

    ngOnInit(){
        this.router.params.subscribe((params) => {
            var id = params['id'];
            //Get movie profiles
            this.http.getMovie(id).subscribe(res =>{
                console.log('movie',res);
                this.movie = res;  
            });
            //Get movie comments
            this.http.getMovieReviews(id).subscribe(res => {
                this.reviews = res.results;  
            });
            //Movie credits
            this.http.getMovieCredits(id).subscribe(res =>{
                console.log(res);
                this.cast = res.cast.slice(0,4);  
            });
            //Similar movies
            this.http.getSimilarMovies(id).subscribe(res => {
                console.log(res.results);
                this.similarMovies = res.results.slice(0, 12); 
            });
        })
    }

    //Return to previous page
    goBack():void {
        this.location.back();
    }
}