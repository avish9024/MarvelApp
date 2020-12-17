import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CharactersComponent } from './characters/characters.component';
import { ComicsComponent } from './comics/comics.component';
import { SeriesComponent } from './series/series.component';
import { FeatureRoutingModule } from './feature-routing.module';
import { CarouselComponent } from './home/carousel/carousel.component';
import {InlineSVGModule} from 'ng-inline-svg';
import { CharacterDetailsComponent } from './characters/character-details/character-details.component';
import { ComicsDetailsComponent } from './comics/comics-details/comics-details.component';
import { SeriesDetailsComponent } from './series/series-details/series-details.component';



@NgModule({
  declarations: [HomeComponent, CharactersComponent, ComicsComponent, SeriesComponent, CarouselComponent, CharacterDetailsComponent, ComicsDetailsComponent, SeriesDetailsComponent],
  exports: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    InlineSVGModule
  ]
})
export class FeatureModule { }
