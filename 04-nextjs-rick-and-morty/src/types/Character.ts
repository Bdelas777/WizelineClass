export interface Character extends Identifiable {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Place;
  location: Place;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface Identifiable {
  id: number;
}

export interface Place {
  name: string;
  url: string;
}
