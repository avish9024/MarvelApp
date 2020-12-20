import { Component, OnInit } from '@angular/core';
import {Character, MarvelResponse, Series} from '../models/marvel.model';
import {MarvelService} from '../../shared/services/marvel.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {

  characters: Series[] = new Array(40);
  selectedCharacter: Series = new Series();
  shown = 40;
  total: number = null;
  filter = '';
  showSkeleton = true;
  constructor(private marvelService: MarvelService) { }

  async ngOnInit(): Promise<void> {
    await this.getAllCharacters();
  }

  async getAllCharacters(): Promise<void> {
    const response: MarvelResponse<any> = await this.marvelService.getComics(this.shown, this.filter);
    this.total = response.data.total;
    this.characters = response.data.results;
    this.showSkeleton = false;
    console.log(this.characters);
  }

  redirectToCharacterDetails(character: Series): void {
    window.location.href = window.location.href + '/' + this.marvelService.getCodedName(character.title) + '/' + character.id;
  }
}
