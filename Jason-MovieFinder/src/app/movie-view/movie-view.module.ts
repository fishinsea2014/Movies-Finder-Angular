import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms'; 

import { MovieViewComponent } from './movie-view.component';

@NgModule({
    declarations: [
        MovieViewComponent,
    ],

    imports: [
        BrowserModule,
        FormsModule
    ],
    exports:[
        CommonModule,
        MovieViewComponent
    ]    
})

export class MovieViewModule {}