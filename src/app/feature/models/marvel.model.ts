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
