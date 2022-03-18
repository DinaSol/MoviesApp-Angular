import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute} from '@angular/router';
import {GetDataService} from '../get-data.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})


export class MovieDetailsComponent implements OnInit {
  movieDetails:any;
  movietext:String = '';
  overview:String='';
  movieDate:any;
  imgBaseUrl:string="https://image.tmdb.org/t/p/original";
  similarMovies: any = [];
  id:any;

  constructor(private route:ActivatedRoute ,private _GetDataService:GetDataService) { 
    route.params.subscribe(val=>{
      //get the id from routed link
      const routeParams = this.route.snapshot.paramMap;
      const elementIdFromRoute = Number(routeParams.get('id'));
      this.id = elementIdFromRoute;

      // get the movie details using the id
    this._GetDataService.getMovieDetails(elementIdFromRoute).subscribe((response)=>{
      this.movieDetails = response;
      this.movietext = response.overview;

      // get short overview to display
      if(this.movietext.length > 250){
        this.overview = this.movietext.slice(0,249);
        this.overview += ' ...'
      }
      else{
        this.overview= this.movietext;
      }
      // get the year when the movie released
      this.movieDate = response.release_date.split('-');
    })
  })
  }
  ngOnInit(): void {
    
    this._GetDataService.getSimilarMovie(this.id).subscribe((response)=>{
      // display 7 iteams of the similar movies
      for(let i=0 ; i<8 ; i++)
      this.similarMovies.push(response.results[i]);
    })
  }

}
