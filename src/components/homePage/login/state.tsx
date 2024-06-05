import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface JwtStore { 
  accessToken: string;
  setAccessToken: (accessToken: string) => void;
}

export const useStore = create(
  persist<JwtStore>(
    (set) => ({
      accessToken: window.localStorage.getItem('accessToken') || "error",
      setAccessToken: (select) => set({ accessToken: select })
    }),
    {
      name: 'accessToken'
    },
  ),
);

interface UserStore { 
  userInfo: string,
  setUserInfo: ( userInfo: string ) => void;
}

export const useUserStore = create(
  persist<UserStore>(
    (set) => ({
      userInfo: window.localStorage.getItem('userInfo') || "{}",
      setUserInfo: (userInfo) => set({ userInfo }),
    }),
    {
      name: 'userInfo'
    },
  ),
);

interface BlogStore { 
  blogInfo: string,
  setBlogInfo: ( blogInfo: string ) => void;
}

export const useBlogStore = create(
  persist<BlogStore>(
    (set) => ({
      blogInfo: window.localStorage.getItem('blogInfo') || "{}",
      setBlogInfo: (blogInfo) => set({ blogInfo }),
    }),
    {
      name: 'blogInfo'
    },
  ),
);