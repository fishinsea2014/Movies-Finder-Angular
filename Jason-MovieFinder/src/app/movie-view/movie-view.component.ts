import { Component, Input } from '@angular/core';

@Component({
    selector:'movie-view',
    templateUrl:'./movie-view.component.html',
    styleUrls: ['./movie-view.component.css'],
})

export class MovieViewComponent {
    //Get params from parent component
    @Input() movie:object;
}