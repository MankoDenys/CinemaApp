import { Component, OnInit } from '@angular/core';
import { Movie } from './../../interface/movie';
// import { listOfFilms } from './../../list-of-films';
import { MovieService } from './../../movie.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  // movies = listOfFilms;
  movies: Movie[];
  // selectedMovie: Movie;

  constructor(private movieService: MovieService) { }

  ngOnInit(){
    this.getMovie();
  }

  // onSelect(movie: Movie): void {
  //   this.selectedMovie = movie;
  // }

  getMovie(): void {
    this.movieService.getMovie()
    .subscribe(movies => this.movies = movies);
  }

}
