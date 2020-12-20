import { Component, OnInit } from '@angular/core';
import {Character, MarvelResponse, Series} from '../models/marvel.model';
import {MarvelService} from '../../shared/services/marvel.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  characters: Series[] = new Array(40);
  selectedCharacter: Character = new Character();
  shown = 40;
  total: number = null;
  filter = '';
  showSkeleton = true;
  constructor(private marvelService: MarvelService, private route: ActivatedRoute) { }

  async ngOnInit(): Promise<void> {
    this.marvelService.componentActive = 'series';
    await this.getAllCharacters();
  }

  async getAllCharacters(): Promise<void> {
    const response: MarvelResponse<any> = await this.marvelService.getSeries(this.shown, this.filter);
    this.total = response.data.total;
    this.characters = response.data.results;
    this.showSkeleton = false;
    console.log(this.characters);
  }

  redirectToCharacterDetails(character: Series): void {
    window.location.href  = window.location.href + '/' + this.marvelService.getCodedName(character.title) + '/' + character.id;
  }

  // encode(uriComponent: string): string {
  //   return encodeURIComponent(uriComponent).replace(/[!'()*]/g, (c) => {
  //     // Also encode !, ', (, ), and *
  //     return '%' + c.charCodeAt(0).toString(16);
  //   });
  // }
}
