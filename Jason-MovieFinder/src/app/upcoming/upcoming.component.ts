import { Component } from '@angular/core';
import { MoviesService } from '../movies.service';


@Component ({
    selector: 'upcoming',
    templateUrl: './upcoming.component.html',
    styleUrls: ['./upcoming.component.css'],
    providers: [MoviesService]
})

export class UpcomingComponent {
    upcomingMovies: Array<Object>;
    constructor(private http:MoviesService) {}
    ngOnInit (){
        this.http.getUpComingMovies().subscribe(res => {        
            this.upcomingMovies = res.results;
            //console.log('upcomming',this.upcomingMovies[0].title);
            //debugger;
        })
    }
}