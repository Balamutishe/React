import { create } from "zustand";

interface StateFormChange {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const useStateFormChange = create<StateFormChange>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen) => set({ isOpen }),
}));
