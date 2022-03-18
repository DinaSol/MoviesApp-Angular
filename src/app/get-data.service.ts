import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private _HttpClient:HttpClient) { }

  //  Movies
  getDiscoverMovies():Observable<any>{
    return  this._HttpClient.get('https://api.themoviedb.org/3/movie/now_playing?api_key=c636ed7787cc302d96bf88ccf334e0d8&language=en-US&page=1'); 

  }
   getUpcomingMovies():Observable<any>{
    
    return  this._HttpClient.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=c636ed7787cc302d96bf88ccf334e0d8&language=en-US&page=1`);
   }
   getTrendingMovies():Observable<any>{
     return  this._HttpClient.get(`https://api.themoviedb.org/3/movie/popular?api_key=c636ed7787cc302d96bf88ccf334e0d8&language=en-US&page=1`);
  
    }
   getNowPlaying():Observable<any>{
     return  this._HttpClient.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=c636ed7787cc302d96bf88ccf334e0d8&language=en-US&page=1`);
    }
    getMovieDetails(id:Number):Observable<any>{
      return  this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=c636ed7787cc302d96bf88ccf334e0d8&language=en-US`);
    }
    getSimilarMovie(id:Number):Observable<any>{
      return  this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=c636ed7787cc302d96bf88ccf334e0d8&language=en-US&page=1`);
    }

    // TV Shows
    getSeries():Observable<any>{
     return  this._HttpClient.get('https://api.themoviedb.org/3/tv/3973/similar?api_key=c636ed7787cc302d96bf88ccf334e0d8&language=en-US&page=1');
    }
    getTVDetails(id:Number):Observable<any>{
      return  this._HttpClient.get(`https://api.themoviedb.org/3/tv/${id}?api_key=c636ed7787cc302d96bf88ccf334e0d8&language=en-US`);
    }
    getOnAirTV():Observable<any>{
      return  this._HttpClient.get(`https://api.themoviedb.org/3/tv/1831/similar?api_key=c636ed7787cc302d96bf88ccf334e0d8&language=en-US&page=1`);
    }
    getSimilarTV(id:Number):Observable<any>{
      return  this._HttpClient.get(`https://api.themoviedb.org/3/tv/${id}/similar?api_key=c636ed7787cc302d96bf88ccf334e0d8&language=en-US&page=1`);
    }
}

  //57800 , 950 , 19585, 11114 , 67487 , 57800 ,754934