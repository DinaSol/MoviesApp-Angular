import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../get-data.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {

  popularSerieses:any=[];
  onAirTVs:any=[];
  upcomingMovies:any[]=[];
  nowPlayingMovies:any=[];
  imgBaseUrl:string="https://image.tmdb.org/t/p/original";
  slideConfig = {"slidesToShow": 4.5, "slidesToScroll": 3};

  constructor(private _GetDataService:GetDataService) { }

  ngOnInit(): void {
    this._GetDataService.getSeries().subscribe((response)=>{
      this.popularSerieses = response.results ;
    })
    this._GetDataService.getUpcomingMovies().subscribe((response_1)=>{
      this.upcomingMovies = response_1.results ;
    })
    this._GetDataService.getNowPlaying().subscribe((response)=>{
      this.nowPlayingMovies = response.results ;
    })
    this._GetDataService.getOnAirTV().subscribe((response)=>{
      this.onAirTVs = response.results ;
    })
  
  }

}
