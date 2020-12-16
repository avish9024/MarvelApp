import { Component, OnInit } from '@angular/core';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

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
