import { Component, OnInit } from '@angular/core';
import { faInfoCircle, faPlayCircle, faTimes} from '@fortawesome/free-solid-svg-icons';
import { GetDataService } from '../get-data.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  faPlayCircle = faPlayCircle;
  faInfoCircle = faInfoCircle;
  faTimes=faTimes;
  carouselArr:any=[];
  overviews:any = [];
  imgBaseUrl:string="https://image.tmdb.org/t/p/original";
  movietext: any = [];
  moviesDate: any=[];
  date:any;

  constructor(private _GetDataService:GetDataService) { 
    _GetDataService.getDiscoverMovies().subscribe((response)=>{
      this.carouselArr = response.results ; 
      for(let i = 0 ; i < this.carouselArr.length ; i++ ){
        this.movietext[i] = response.results[i].overview ;
        // get at which year the movie released
        this.moviesDate.push(response.results[i].release_date.slice(0,4));

        if(this.movietext[i].length > 170){
            this.overviews[i] = this.movietext[i].slice(0,159);
            this.overviews[i] += ' ...'
          }
          else{
            this.overviews[i]= this.movietext[i];
          }      
        }
    });
  }

  ngOnInit(): void {

    
    }
  

}
