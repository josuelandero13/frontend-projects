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

    return response.data;
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

  async getProfile(): Promise<{
    userId: string;
    username: string;
    role: string;
  }> {
    const response = await apiClient.get('/auth/profile');

    return response.data;
  },
};
