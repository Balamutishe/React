import { create } from "zustand";

interface StateCurrentUser {
  userData: {
    id: string;
    name: string;
    surname: string;
    contacts?: { type: string; value: string }[];
  };
  setUserData: (userData: {
    id: string;
    name: string;
    surname: string;
    contacts?: { type: string; value: string }[];
  }) => void;
}

export const useStateCurrentUser = create<StateCurrentUser>((set) => ({
  userData: {
    id: "",
    name: "",
    surname: "",
    contacts: [],
  },
  setUserData: (userData) => set({ userData }),
}));
