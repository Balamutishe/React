import { create } from "zustand";

interface StateCurrentUser {
  userData: {
    id: string;
    username: string;
    surname: string;
  };
  setUserData: (userData: {
    id: string;
    username: string;
    surname: string;
  }) => void;
}

export const useStateCurrentUser = create<StateCurrentUser>((set) => ({
  userData: {
    id: "",
    username: "",
    surname: "",
  },
  setUserData: (userData) => set({ userData }),
}));
