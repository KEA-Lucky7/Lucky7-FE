import { create } from "zustand";

export interface UserStore {
  accessToken: string;
  refreshToken: string;
  setUserToken: (accessToken: string, refreshToken: string) => void;
}

export const useStoreJwt = create<UserStore>((set) => ({
  accessToken: "",
  refreshToken: "",
  setUserToken: (accessToken, refreshToken) => set({ accessToken, refreshToken }),
}));