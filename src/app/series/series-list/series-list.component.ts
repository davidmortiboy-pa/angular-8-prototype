import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {SeriesService} from '../services/series.service';
import {Series} from '../models/series.model';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.scss']
})

export class SeriesListComponent implements OnInit, OnDestroy {

  // series$: Subscription; // Using the subscription method
  series$: Observable<Series>; // Using the async pipe method
  series: Series;

  constructor(private seriesService: SeriesService) {
  }

  ngOnInit() {
    this._updateSeriesOnPage('Game of Thrones');
  }

  ngOnDestroy(): void {
    // this.series$.unsubscribe(); // Using the subscription method
  }

  updateSeries(name: HTMLInputElement) {

    console.log(`Updating series: ${name.value}`);
    this._updateSeriesOnPage(name.value);
  }

  private _updateSeriesOnPage(name: string) {
    // Using the subscription method

    /*this.series$ = this.seriesService.getsSeries(name)
      .subscribe((s) => {
        console.log(s);
        this.series = s;
      });*/

    // Using the async pipe method

    this.series$ = this.seriesService.getsSeries(name);
  }
}
