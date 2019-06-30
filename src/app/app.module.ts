import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MovieInfoComponent } from './movie-info/movie-info.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShowtimeComponent } from './showtime/showtime.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    MovieInfoComponent,
    DashboardComponent,
    ShowtimeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
