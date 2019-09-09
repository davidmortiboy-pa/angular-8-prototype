import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {SeriesService} from '../services/series.service';
import {Series} from '../models/series.model';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.scss']
})

export class SeriesListComponent implements OnInit, OnDestroy {

  series$: Subscription
  series: Series;

  constructor(private seriesService: SeriesService) {}

  ngOnInit() {
    this.series$ = this.seriesService.getsSeries()
      .subscribe((s) => {
        console.log(s);
        this.series = s;
      });
  }

  ngOnDestroy(): void {
    this.series$.unsubscribe();
  }

}
