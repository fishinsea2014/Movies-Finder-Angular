import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import {MoviesComponent} from './movies/movies.component';
import {UpcomingComponent} from './upcoming/upcoming.component';
import { appRoutes } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    UpcomingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
