import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Series} from '../../models/marvel.model';
import {MarvelService} from '../../../shared/services/marvel.service';

@Component({
  selector: 'app-series-details',
  templateUrl: './series-details.component.html',
  styleUrls: ['./series-details.component.css']
})
export class SeriesDetailsComponent implements OnInit {
  seriesId: number;
  seriesDetails: Series;
  showSkeleton = true;
  constructor(private route: ActivatedRoute, private marvelService: MarvelService) {
    this.seriesId = this.route.snapshot.params.id;
  }

  ngOnInit(): void {
    this.marvelService.seriesComponentActive = true;
    this.getSeriesDetails().then(response => {
      this.seriesDetails = response.data.results[0];
      console.log(this.seriesDetails);
      this.showSkeleton = false;
    });
  }

  async getSeriesDetails(): Promise<any> {
    return await this.marvelService.getSeriesById(this.seriesId);
  }

}
