import { create } from "zustand";

interface StateCurrentUser {
  userData: {
    id: string;
    name: string;
    surname: string;
  };
  setUserData: (userData: {
    id: string;
    name: string;
    surname: string;
  }) => void;
}

export const useStateCurrentUser = create<StateCurrentUser>((set) => ({
  userData: {
    id: "",
    name: "",
    surname: "",
  },
  setUserData: (userData) => set({ userData }),
}));
