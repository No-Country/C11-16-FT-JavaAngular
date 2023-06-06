export interface Form {
  email: string;
  password: string;
}

export interface AuthResponse {
  accessToken: string;
  tokenType: string;
}

export interface Payload {
  sub: string;
  id: string;
  iat: number;
  exp: number;
}

export interface RegisterForm {
  email: string;
  password: string;
  name: string;
  lastname: string;
  dni: string;
  profile_picture: string;
}
