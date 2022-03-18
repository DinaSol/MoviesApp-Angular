import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesComponent } from './movies/movies.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SeriesDetailsComponent } from './series-details/series-details.component';
import { SeriesComponent } from './series/series.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'movies', component:MoviesComponent},
  {path:'tvShows', component:SeriesComponent},
  {path:'movie/:id', component:MovieDetailsComponent},
  {path:'tvShows/:id', component:SeriesDetailsComponent},
  {path:'**', component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
