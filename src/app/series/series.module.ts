import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesListComponent } from './series-list/series-list.component';
import {SeriesRoutingModule} from './series-routing.module';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [SeriesListComponent],
  imports: [
    CommonModule, SeriesRoutingModule, HttpClientModule
  ]
})

export class SeriesModule { }
