import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MoviesComponent} from './movies/movies.component';
import { UpcomingComponent} from './upcoming/upcoming.component';
import { MovieViewComponent} from './movie-view/movie-view.component';
import { GenresComponent } from './genres/genres.component';
import { appRoutes } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    UpcomingComponent,
    GenresComponent,
    MovieViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
