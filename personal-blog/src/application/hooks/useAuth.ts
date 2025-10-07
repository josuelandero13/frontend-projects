import { create } from 'zustand';
import { authService } from '../services/authService';
import { authStorage } from '@/infrastructure/auth/authStorage';
import { LoginRequest, RegisterRequest, User } from '@/core/entities/user';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (credentials: LoginRequest) => Promise<void>;
  register: (userData: RegisterRequest) => Promise<void>;
  logout: () => void;
  checkAuth: () => Promise<void>;
  initialize: () => void;
}

export const useAuth = create<AuthState>((set, get) => ({
  user: null,
  isAuthenticated: false,
  isLoading: true,

  login: async (credentials: LoginRequest) => {
    try {
      const response = await authService.login(credentials);
      authStorage.setToken(response.accessToken);
      authStorage.setRefreshToken(response.refreshToken);
      authStorage.setUser(response.user);
      set({
        user: response.user,
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

  initialize: () => {
    const token = authStorage.getToken();
    const user = authStorage.getUser();

    if (token && user) {
      set({
        user: {
          ...user,
          id: user.id,
        },
        isAuthenticated: true,
        isLoading: false,
      });
    } else {
      set({ isLoading: false });
    }
  },
}));
