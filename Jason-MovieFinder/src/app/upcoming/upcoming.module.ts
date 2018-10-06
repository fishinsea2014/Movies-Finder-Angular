import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpcomingComponent } from './upcoming.component';
import { MovieViewModule } from '../movie-view/movie-view.module';

@NgModule({
    declarations: [
        UpcomingComponent, //Self defined component.
    ],
    imports: [
        BrowserModule,
        CommonModule,
        MovieViewModule,
    ],

    providers: [],
})

export class UpcomingModule{}