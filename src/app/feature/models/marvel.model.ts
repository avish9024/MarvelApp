export class Character {
  public id : number;
  public name : string;
  public description : string;
  public thumbnail : Thumbnail;
}

export class Thumbnail {
  public path: string;
  public extension: string;
}

export abstract class MarvelResponse<T> {
  public code: number;
  public status: string;
  public attributionHTML: string;
  public data: MarvelList<T>;
}

export class MarvelList<T> {
  public offset: number;
  public limit: number;
  public total: number;
  public count: number;
  public results: T[];
}

export class Origin {
  public origin: string;
  public headers: Headers;
}

export class Headers {
  public Accept: string;
}

export class Items {
  name: string;
  resourceURI: string;
}

export class Comics {
  available: number;
  items: Items[];
  collectionURI: string;
  returned: number;
}

export class Characters {
  comics: Comics;
  description: string;
  id: number;
  modified: Date;
  name: string;
  resourceURI: string;
  series: Comics;
  stories: Comics;
  thumbnail: Thumbnail;
  urls: Url;
}

export class Url {
  type: string;
  url: string;
}

export class Series {
  characters: Comics;
  comics: Comics;
  creators: Comics;
  description: string;
  endYear: number;
  events: Comics;
  id: number;
  modified: Date;
  next: number;
  previous: number;
  rating: string;
  resourceURI: string;
  startYear: number;
  stories: Comics;
  thumbnail: Thumbnail;
  title: string;
  type: string;
  urls: Url;
}
