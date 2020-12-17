import { Component, OnInit } from '@angular/core';
import {Character, MarvelResponse} from '../models/marvel.model';
import {MarvelService} from '../../shared/services/marvel.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {

  characters: Character[] = new Array(40);
  selectedCharacter: Character = new Character();
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

  redirectToCharacterDetails(character: Character): void {
    window.location.href = window.location.href + '/' + character.name + '/' + character.id;
  }
}
