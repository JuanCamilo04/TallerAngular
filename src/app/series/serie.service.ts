import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Serie } from './serie';
import { dataSeries } from './dataSeries';

@Injectable({
  providedIn: 'root',
})
export class SerieService {
  constructor() {}

  getSeries(): Observable<Serie[]> {
    return of(dataSeries);
  }
}
