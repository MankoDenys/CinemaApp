import { Component, OnInit, Input } from '@angular/core';
import { Movie } from './../interface/movie';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MovieService } from './../movie.service';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.scss']
})
export class MovieInfoComponent implements OnInit {

  // @Input() movie: Movie;
  movie: Movie;

  constructor(
    private route: ActivatedRoute,
  private movieService: MovieService,
  private location: Location
  ) { }

  ngOnInit(): void {
    this.getMovieId();
  }

  getMovieId(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.movieService.getMovieId(id)
      .subscribe(movie => this.movie = movie);
  }

  goBack(): void {
  this.location.back();
}
}
