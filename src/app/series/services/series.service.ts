import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Series} from '../models/series.model';

@Injectable({
  providedIn: 'root'
})

export class SeriesService {

  constructor(private http: HttpClient) { }

  getsSeries(name: string): Observable<Series> {
   //// return of({
    //  name: 'David'
   // });

    const nameEncoded = encodeURI(name);
    return this.http.get(`http://www.omdbapi.com/?t=${nameEncoded}&apikey=84e8e66c`) as Observable<Series>;
  }
}
