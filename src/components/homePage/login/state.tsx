import { create } from "zustand";

export interface UserStore {
  userToken: string;
  setUserToken: (token: string) => void;
}

export const useStore = create<UserStore>((set) => ({
  userToken: "",
  setUserToken: (token) => set({ userToken: token }),
}));
