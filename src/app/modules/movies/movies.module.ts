import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MovieComponent } from './components/movie/movie.component';
import { MoviesRoutingModule } from './movies-routing.module';

import { MoviesService } from './services/movies.service';

@NgModule({
  imports: [
    CommonModule,
    MoviesRoutingModule
  ],
  declarations: [
    MovieComponent,
    MoviesListComponent
  ],
  providers: [MoviesService]

})
export class MoviesModule { }
