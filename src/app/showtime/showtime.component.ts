import { Component, OnInit } from '@angular/core';
import { Movie } from './../interface/movie';
import { MovieService } from './../movie.service';
import { ShowtimeDate } from "./../interface/showtimeDate";
import { ShowtimeTime } from "./../interface/showtimeTime";

@Component({
  selector: 'app-showtime',
  templateUrl: './showtime.component.html',
  styleUrls: ['./showtime.component.scss']
})
export class ShowtimeComponent implements OnInit {

  movies: Movie[];
  showtimeDates: ShowtimeDate[];
  showtimeTimes: ShowtimeTime[];


  constructor(private movieService: MovieService) { }

  ngOnInit(){
    this.getMovie(),
    this.getDate();
    this.getTime();
  }

  getMovie(): void {
    this.movieService.getMovie()
    .subscribe(movies => this.movies = movies);
  }

  getDate(): void {
    this.movieService.getDate()
    .subscribe(showtimeDates => this.showtimeDates = showtimeDates);
  }

  getTime(): void {
    this.movieService.getTime()
    .subscribe(showtimeTimes => this.showtimeTimes = showtimeTimes);
  }


}
