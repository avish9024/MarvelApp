import { Component, OnInit } from '@angular/core';
import {Character, MarvelResponse} from '../models/marvel.model';
import {MarvelService} from '../../shared/services/marvel.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters: Character[] = new Array(40);
  shown = 40;
  total: number = null;
  filter = '';
  showSkeleton = true;
  constructor(private marvelService: MarvelService) { }

  async ngOnInit(): Promise<void> {
    await this.getAllCharacters();
  }

  async getAllCharacters(): Promise<void> {
    const response: MarvelResponse<any> = await this.marvelService.getCharacters(this.shown, this.filter);
    this.total = response.data.total;
    this.characters = response.data.results;
    this.showSkeleton = false;
    console.log(this.characters);
  }

}
