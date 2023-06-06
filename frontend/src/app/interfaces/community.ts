export interface Community {
  id: number;
  content: string;
  rating: number;
  createdDateTime: Date;
  client: Client;
  company: Company;
}

export interface Client {
  id: number;
  email: string;
  password: string;
  name: string;
  lastname: string;
  dni: string;
  country: string;
  birth_date: Date;
  profile_picture: string;
  favorites: any[];
  my_travels: any[];
}

export interface Company {
  id: number;
  name: string;
  contact_number: string;
  contact_links: string;
  reviews: Review[];
}

export interface Review {
  id: number;
  content: string;
  rating: number;
  createdDateTime: Date;
  client: Client;
  company: number;
}
