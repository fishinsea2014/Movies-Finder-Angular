import { Component } from '@angular/core';
import { MoviesService } from '../movies.service';


@Component ({
    selector: "movies",
    templateUrl: "./movies.component.html",
    styleUrls: ['./movies.component.css'],
    providers: [MoviesService]
})

export class MoviesComponent {
    searchStr: string;
    topRatedMovies: Array<Object>;
    searchLists: Array<Object>;

    constructor(private http:MoviesService){}

    ngOnInit(){
        this.http.getTopRatedMovies().subscribe(res =>{
            this.topRatedMovies = res.results;
        })
    }

    searchMovies(){
        console.log("searching...")
        this.http.searchMovies(this.searchStr).subscribe(res => {
            this.searchLists = res.results;
            console.log("Search lists",this.searchLists, '| search string', this.searchStr);

        })
    }
}