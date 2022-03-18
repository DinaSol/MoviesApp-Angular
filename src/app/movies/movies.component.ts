import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../get-data.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  upcomingMovies:any[]=[];
  trendingMovies:any[]=[];
  trendingMovieOne:any=[];
  nowPlayingMovies:any=[];
  imgBaseUrl:string="https://image.tmdb.org/t/p/original";

  slideConfig = {"slidesToShow": 4, "slidesToScroll": 3};
  
  
  constructor(private _GetDataService:GetDataService) {

   }

  ngOnInit(): void {
    this._GetDataService.getUpcomingMovies().subscribe((response_1)=>{
      this.upcomingMovies = response_1.results ;
    })
    this._GetDataService.getTrendingMovies().subscribe((response)=>{
        this.trendingMovies = response.results ;
        this.trendingMovieOne = response.results[2];    
    })
    this._GetDataService.getNowPlaying().subscribe((response)=>{
      this.nowPlayingMovies = response.results ;
    })
  }

}
