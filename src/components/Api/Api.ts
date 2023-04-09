export interface Data {
  info: Info;
  results: Result[];
}

export interface Info {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
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

const searchPerson = async (text = '') => {
  const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${text}`);
  const data: Data = await response.json();
  return data;
};

export default searchPerson;
