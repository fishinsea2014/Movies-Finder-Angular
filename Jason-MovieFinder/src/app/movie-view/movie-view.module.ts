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
    //The mudule will be referenced by other modules, need to be exported.
    exports:[
        CommonModule,
        MovieViewComponent
    ],
    providers: []    
})

export class MovieViewModule {}