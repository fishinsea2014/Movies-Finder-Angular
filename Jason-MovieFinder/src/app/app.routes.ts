import { Routes } from '@angular/router';
import {MoviesComponent } from './movies/movies.component';
import {UpcomingComponent } from './upcoming/upcoming.component';
import { componentFactoryName } from '@angular/compiler';
import { GenresComponent } from './genres/genres.component';


export const appRoutes : Routes =[
    {path: '', component: MoviesComponent, pathMatch:'full'},
    {path: 'upcoming', component: UpcomingComponent, pathMatch:'full'},
    {path: 'pupular', component: MoviesComponent, pathMatch:'full'},
    {path: 'genres/:id/:name', component: GenresComponent}
]
