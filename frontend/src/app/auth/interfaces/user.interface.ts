export interface User {
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
  roles: Role[];
}

export interface Role {
  idRol: number;
  name: string;
}
