import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
    selector: 'my-genres',
    templateUrl: './genres.component.html',
    styleUrls: ['./genres.component.css'],
    providers: [MoviesService]
})

export class GenresComponent {
    genresName: string;
    movies;

    constructor (private router:ActivatedRoute,
                 private http: MoviesService) {}
    ogOnInit(){
        this.router.params.subscribe((params) =>{
            var id = params['id'];
            this.genresName = params['name'];

            //Call request in service
            this.http.getMoviesByGenre(id).subscribe(res => {
                this.movies=res.results;
            })
        })
    }

}