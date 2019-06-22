import { Component, OnInit } from '@angular/core';
import { Movie } from './../../interface/movie';
import { listOfFilms } from './../../list-of-films';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  movies = listOfFilms;
  // movies: Movie[];
  selectedMovie: Movie;

  constructor() { }

  ngOnInit() {
  }

  onSelect(movie: Movie): void {
    this.selectedMovie = movie;
  }

}
