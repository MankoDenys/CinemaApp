import { Injectable } from '@angular/core';
import { Movie } from './interface/movie';
import { listOfFilms } from './list-of-films';
import { Observable, of } from 'rxjs';
import { listOfDateTime } from "./list-of-date-time";
import { ShowtimeDate } from "./interface/showtimeDate";
import { ShowtimeTime } from "./interface/showtimeTime";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  getMovie(): Observable<Movie[]> {
    return of(listOfFilms);
  }

  getMovieId(id: number): Observable<Movie> {
    return of(listOfFilms.find(movie => movie.id === id));
  }

  getDate(): Observable<ShowtimeDate[]> {
    return of(listOfDateTime);
  }

  // getTime(): Observable<ShowtimeTime[]> {
  //   return of(listOfDateTime);
  // }
}
