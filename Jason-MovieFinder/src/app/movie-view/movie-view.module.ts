import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { appRoutes } from '../app.routes';

import { FormsModule } from '@angular/forms'; 

import { MovieViewComponent } from './movie-view.component';
import { DetailComponent } from '../detail/detail.component';

@NgModule({
    declarations: [
        MovieViewComponent,
        DetailComponent,
    ],

    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(appRoutes)

    ],
    //The mudule will be referenced by other modules, need to be exported.
    exports:[
        CommonModule,
        MovieViewComponent
    ],
    providers: []    
})

export class MovieViewModule {}