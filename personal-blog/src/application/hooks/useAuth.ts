import { LoginRequest, RegisterRequest } from '@/core/entities/user';
import { authStorage } from '@/infrastructure/auth/authStorage';
import { create } from 'zustand';
import { authService } from '../services/authService';

interface AuthState {
  user: { userId: string; username: string; role: string } | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (credentials: LoginRequest) => Promise<void>;
  register: (userData: RegisterRequest) => Promise<void>;
  logout: () => void;
  checkAuth: () => Promise<void>;
}

export const useAuth = create<AuthState>((set, get) => ({
  user: null,
  isAuthenticated: false,
  isLoading: true,

  login: async (credentials: LoginRequest) => {
    try {
      const { accessToken, refreshToken, user } = await authService.login(credentials);

      authStorage.setToken(accessToken);
      authStorage.setRefreshToken(refreshToken);
      set({
        user: {
          userId: user.id,
          username: user.username,
          role: user.role
        },
        isAuthenticated: true,
      });
    } catch (error) {
      authStorage.clear();
      throw error;
    }
  },

  register: async (userData: RegisterRequest) => {
    await authService.register(userData);

    await get().login({
      username: userData.username,
      password: userData.password,
    });
  },

  logout: () => {
    authStorage.clear();
    set({
      user: null,
      isAuthenticated: false,
    });
  },

  checkAuth: async () => {
    try {
      const token = authStorage.getToken();
      if (!token) {
        set({ isLoading: false });
        return;
      }

      const user = await authService.getProfile();
      set({
        user,
        isAuthenticated: true,
        isLoading: false,
      });
    } catch {
      authStorage.clear();
      set({
        user: null,
        isAuthenticated: false,
        isLoading: false,
      });
    }
  },
}));
