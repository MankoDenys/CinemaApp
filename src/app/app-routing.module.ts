import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesListComponent } from "./components/movies-list/movies-list.component";
import { DashboardComponent }   from './dashboard/dashboard.component';
import { MovieInfoComponent } from "./movie-info/movie-info.component";
import { ShowtimeComponent } from "./showtime/showtime.component";

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'movies', component: MoviesListComponent },
  { path: 'info/:id', component: MovieInfoComponent },
  { path: 'showtime', component: ShowtimeComponent }

  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
