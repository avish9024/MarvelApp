import { Component, OnInit } from '@angular/core';
import {MarvelService} from '../../shared/services/marvel.service';
import {Character, MarvelResponse} from '../models/marvel.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'Demo Angular 4.x  Application';
  attribution: string;
  characters: Character[] = [];
  shown = 40;
  total: number = null;
  filter = 'spider';

  constructor(private marvelService: MarvelService) { }

  async ngOnInit(): Promise<void> {
    await this.getAllCharacters();
    await this.getAllComics();
    await this.getAllSeries();
  }

  async getAllCharacters(): Promise<void> {
    const response: MarvelResponse<any> = await this.marvelService.getCharacters(this.shown, this.filter);
    console.log(response);
  }
  async getAllComics(): Promise<void> {
    const response: MarvelResponse<any> = await this.marvelService.getCharacters(this.shown, this.filter);
    console.log(response);
  }
  async getAllSeries(): Promise<void> {
    const response: MarvelResponse<any> = await this.marvelService.getCharacters(this.shown, this.filter);
    console.log(response);
  }

}
