import create from 'zustand';
import { auth } from '../config/firebase';

interface AuthState {
  user: any | null;
  loading: boolean;
  setUser: (user: any) => void;
  signOut: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  loading: true,
  setUser: (user) => set({ user, loading: false }),
  signOut: async () => {
    await auth.signOut();
    set({ user: null });
  },
}));
