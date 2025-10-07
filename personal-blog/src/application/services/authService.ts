import {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  User,
} from '@/core/entities/user';
import { apiClient } from '@/infrastructure/http/apiClient';

export const authService = {
  async login(credentials: LoginRequest): Promise<LoginResponse> {
    const response = await apiClient.post('/auth/login', credentials);

    return response.data.data;
  },

  async register(
    userData: RegisterRequest
  ): Promise<Omit<User, 'passwordHash'>> {
    const response = await apiClient.post('/auth/register', userData);

    return response.data;
  },

  async refreshToken(
    refreshToken: string
  ): Promise<{ accessToken: string; refreshToken: string }> {
    const response = await apiClient.post('/auth/refresh', { refreshToken });

    return response.data;
  },

  async getProfile(): Promise<User> {
    const response = await apiClient.get('/auth/me');
    const data = response.data;

    return {
      id: data.userId,
      username: data.username,
      email: data.email || '',
      role: data.role as 'admin' | 'author' | 'guest',
      createdAt: data.createdAt || new Date().toISOString(),
      updatedAt: data.updatedAt || new Date().toISOString(),
    };
  },
};
