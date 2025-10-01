export interface User {
  id: string;
  username: string;
  email: string;
  role: 'admin' | 'author' | 'guest';
  createdAt: string;
  updatedAt: string;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  user: Omit<User, 'passwordHash'>;
}

export interface RegisterRequest {
  username: string;
  email: string;
  password: string;
  role?: string;
}
