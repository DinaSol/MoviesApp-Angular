import { Component, OnInit } from '@angular/core';
import {GetDataService} from '../get-data.service';
import { faPlayCircle ,faCompactDisc } from '@fortawesome/free-solid-svg-icons';


// <i class="fa-solid fa-earth-africa"></i>


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  faPlayCircle = faPlayCircle;
  slideConfig = {"slidesToShow": 4.5, "slidesToScroll": 3};
 
  upcomingMovies:any[]=[];
  trendingMovies:any[]=[];
  trendingMovieOne:any=[];
  nowPlayingMovies:any=[];
  seriesArr:any[]=[];
  imgBaseUrl:string="https://image.tmdb.org/t/p/original";
  faCompactDisc = faCompactDisc;
  constructor(_GetDataService:GetDataService) {  
    _GetDataService.getUpcomingMovies().subscribe((response_1)=>{
        this.upcomingMovies = response_1.results ;
    })
    _GetDataService.getTrendingMovies().subscribe((response)=>{
        this.trendingMovies = response.results ;
        this.trendingMovieOne = response.results[2];    
    })
    _GetDataService.getNowPlaying().subscribe((response)=>{
      this.nowPlayingMovies = response.results ;
    })
    _GetDataService.getSeries().subscribe((response)=>{
      this.seriesArr = response.results ;
    })
    }
  ngOnInit(): void {
  }

}
