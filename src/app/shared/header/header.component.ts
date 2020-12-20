import { Component, OnInit } from '@angular/core';
import {environment} from '../../../environments/environment';
import {MarvelService} from '../services/marvel.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public marvelService: MarvelService) { }

  ngOnInit(): void {
  }

  routeToHome(): void {
    window.location.href = environment.projectUrl + '/home';
  }

  routeToCharacters(): void {
    window.location.href = environment.projectUrl + '/characters';
  }

  routeToComics(): void {
    window.location.href = environment.projectUrl + '/comics';
  }

  routeToSeries(): void {
    window.location.href = environment.projectUrl + '/series';
  }

}
