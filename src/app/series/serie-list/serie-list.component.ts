import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { SerieService } from '../serie.service';

@Component({
  selector: 'app-serie-list',
  standalone: false,
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.css'],
})
export class SerieListComponent implements OnInit {
  series: Serie[] = [];
  avgSeasons: number = 0;
  selectedSerie: Serie | null = null;

  constructor(private serieService: SerieService) {}

  ngOnInit(): void {
    this.getSeriesList();
  }

  getSeriesList(): void {
    this.serieService.getSeries().subscribe((data) => {
      this.series = data;
      console.log('Series cargadas:', this.series);
      this.avgSeasons = this.getAvgSeasons();
    });
  }

  getAvgSeasons(): number {
    const totalSeasons = this.series.reduce((total, s) => total + s.seasons, 0);
    return this.series.length ? totalSeasons / this.series.length : 0;
  }

  selectSerie(serie: Serie): void {
    this.selectedSerie = serie;
  }
}
