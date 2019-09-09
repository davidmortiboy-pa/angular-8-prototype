import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'series',
    pathMatch: 'full'
  },
  {
    path: 'series',
    loadChildren: () => import('./series/series.module').then(m => m.SeriesModule) // differential loading
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
