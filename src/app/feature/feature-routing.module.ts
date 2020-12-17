import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {SeriesComponent} from './series/series.component';
import {ComicsComponent} from './comics/comics.component';
import {CharactersComponent} from './characters/characters.component';
import {CharacterDetailsComponent} from './characters/character-details/character-details.component';
import {SeriesDetailsComponent} from './series/series-details/series-details.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'characters', component: CharactersComponent},
  { path: 'characters/:name/:id', component: CharacterDetailsComponent},
  { path: 'comics', component: ComicsComponent},
  { path: 'series', component: SeriesComponent},
  { path: 'series/:title/:id', component: SeriesDetailsComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
