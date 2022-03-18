import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetDataService } from '../get-data.service';

@Component({
  selector: 'app-series-details',
  templateUrl: './series-details.component.html',
  styleUrls: ['./series-details.component.scss']
})
export class SeriesDetailsComponent implements OnInit {
  faPlayCircle:any;
  tvDetails:any={};
  similarTVs:any=[];
  overview:any;
  id:any;
  imgBaseUrl:string="https://image.tmdb.org/t/p/original";
  TVtext:string='';
  slideConfig = {"slidesToShow": 4.5, "slidesToScroll": 3};


  constructor(private route:ActivatedRoute ,private _GetDataService:GetDataService  , private _Router:Router) {
   route.params.subscribe(val=>{
    const routeParams = this.route.snapshot.paramMap;
    const elementIdFromRoute = Number(routeParams.get('id'));
    this.id = elementIdFromRoute;

    this._GetDataService.getTVDetails(this.id).subscribe((response)=>{
      this.tvDetails = response;
      this.TVtext = response.overview;
      if(this.TVtext.length > 150){
        this.overview = this.TVtext.slice(0,149);
        this.overview += ' ...'
      }
      else{
        this.overview= this.TVtext;
      }
    })
  })
  }

  ngOnInit(): void {   
    this._GetDataService.getSimilarTV(this.id).subscribe((response)=>{
      for(let i=0 ; i<8 ; i++)
      this.similarTVs.push(response.results[i]);
    })
  }
}
