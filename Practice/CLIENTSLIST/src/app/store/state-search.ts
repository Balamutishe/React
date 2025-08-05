import { create } from "zustand";

interface StateSearch {
  searchValue: string;
  setSearchValue: (searchValue: string) => void;
}

export const useStateSearch = create<StateSearch>((set) => ({
  searchValue: "",
  setSearchValue: (searchValue) => set({ searchValue }),
}));
