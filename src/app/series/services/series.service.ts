import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Series} from '../models/series.model';

@Injectable({
  providedIn: 'root'
})

export class SeriesService {

  constructor(private http: HttpClient) { }

  getsSeries(): Observable<Series> {
   //// return of({
    //  name: 'David'
   // });
   return this.http.get('http://www.omdbapi.com/?t=Game%20of%20Thrones&apikey=84e8e66c') as Observable<Series>;
  }
}
