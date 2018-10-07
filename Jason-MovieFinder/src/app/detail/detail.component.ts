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
}