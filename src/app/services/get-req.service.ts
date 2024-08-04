import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetReqService {
  private apiUrl = 'https://api.themoviedb.org/3/trending/all/day?api_key=866cd3a065ef9304a549f1d65e494940';

  constructor(private http: HttpClient) { }
  
  getTrendingMovies(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
