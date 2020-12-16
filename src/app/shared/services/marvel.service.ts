import { Injectable } from '@angular/core';
import { Md5 } from 'ts-md5/dist/md5';
import {Character, MarvelResponse} from '../../feature/models/marvel.model';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  private marvelCharacterUrl = environment.marvelApi;
  private publicKey = environment.publicKey;
  private privateKey = environment.privateKey;

  constructor(private httpService: HttpClient) { }

  private getHash(timeStamp: string): string {
    const hashGenerator: Md5 = new Md5();
    hashGenerator.appendStr(timeStamp);
    hashGenerator.appendStr(this.privateKey);
    hashGenerator.appendStr(this.publicKey);
    const hash: string = hashGenerator.end().toString();
    return hash;
  }
  private getTimeStamp(): string {
    return new Date().valueOf().toString();
  }
  public async getCharacters(limit: number = 40, prefix: string = null): Promise<any> {
    const timeStamp = this.getTimeStamp();
    const hash = this.getHash(timeStamp);
    let requestUrl = this.marvelCharacterUrl + 'characters' + '?limit=' + limit + '&ts=' + timeStamp + '&apikey=' + this.publicKey + '&hash=' + hash + '&orderBy=-modified&offset=0';
    if (prefix) {
      requestUrl += '&nameStartsWith=' + prefix;
    }
    const response = await this.httpService.get(requestUrl).toPromise();
    return response;
  }

  public async getComics(limit: number = 40, prefix: string = null): Promise<any> {
    const timeStamp = this.getTimeStamp();
    const hash = this.getHash(timeStamp);
    // tslint:disable-next-line:max-line-length
    let requestUrl = this.marvelCharacterUrl + 'comics' + '?limit=' + limit + '&ts=' + timeStamp + '&apikey=' + this.publicKey + '&hash=' + hash + '&offset=0&hasDigitalIssue=true';
    if (prefix) {
      requestUrl += '&nameStartsWith=' + prefix;
    }
    const response = await this.httpService.get(requestUrl).toPromise();
    return response;
  }

  public async getSeries(limit: number = 40, prefix: string = null): Promise<any> {
    const timeStamp = this.getTimeStamp();
    const hash = this.getHash(timeStamp);
    // tslint:disable-next-line:max-line-length
    let requestUrl = this.marvelCharacterUrl + 'series' + '?limit=' + limit + '&ts=' + timeStamp + '&apikey=' + this.publicKey + '&hash=' + hash + '&offset=0';
    if (prefix) {
      requestUrl += '&nameStartsWith=' + prefix;
    }
    const response = await this.httpService.get(requestUrl).toPromise();
    return response;
  }
}
