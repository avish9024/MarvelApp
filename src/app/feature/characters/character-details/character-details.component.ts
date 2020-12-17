import {Component, Input, OnInit} from '@angular/core';
import {MarvelService} from '../../../shared/services/marvel.service';
import {Character, Characters, MarvelResponse} from '../../models/marvel.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit {

  characterId: number;
  characterDetails: Characters;
  showSkeleton = true;

  constructor(public marvelService: MarvelService,
              private route: ActivatedRoute) {
    this.characterId = this.route.snapshot.params.id;
  }

  ngOnInit(): void {
    this.getCharacterDetails().then(response => {
      this.characterDetails = response.data.results[0];
      console.log(this.characterDetails);
      this.showSkeleton = false;
    });
  }

  async getCharacterDetails(): Promise<any> {
    return await this.marvelService.getCharacterById(this.characterId);
  }

}
