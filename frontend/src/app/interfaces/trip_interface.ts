export interface Trip {
  id: number;
  type: string;
  status: string;
  origin: string;
  destination: string;
  price: number;
  stops: number;
  departure: string;
  arrival: Date;
  allows_changes: boolean;
  allows_cancel: boolean;
  image: string;
  available_seats: number;
  children: number;
  adults: number;
  pet_friendly: boolean;
  company: Company;
  hotel: Hotel;
}

export interface Company {
  id: number;
  name: string;
  contact_number: string;
  contact_links: string;
}

export interface Hotel {
  id: number;
  title: string;
  ubicacion: string;
  contact: string;
  description: string;
  items: string[];
  estadia: string;
  direccion: string;
}

export interface TripModifie {
  id: number;
  type: string;
  origin: string;
  destination: string;
  price: number;
  departure: string;
  image: string;
  children: number;
  adults: number;
  pet_friendly: boolean;
  hotel: Hotel | null;
}
