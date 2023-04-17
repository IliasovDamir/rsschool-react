export interface IFormCards {
  photo: string;
  name: string;
  date: string;
  carCategory: string;
  daysToRent: string;
  accept: boolean;
}

export interface Data {
  info: Info;
  results: Result[];
  error?: string;
}

export interface Info {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
  error?: string;
}

export interface Result {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface Origin {
  name: string;
  url: string;
}

export interface Location {
  name: string;
  url: string;
}
