import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CharactersComponent } from './characters/characters.component';
import { ComicsComponent } from './comics/comics.component';
import { SeriesComponent } from './series/series.component';
import { FeatureRoutingModule } from './feature-routing.module';
import { CarouselComponent } from './home/carousel/carousel.component';



@NgModule({
  declarations: [HomeComponent, CharactersComponent, ComicsComponent, SeriesComponent, CarouselComponent],
  imports: [
    CommonModule,
    FeatureRoutingModule
  ]
})
export class FeatureModule { }
