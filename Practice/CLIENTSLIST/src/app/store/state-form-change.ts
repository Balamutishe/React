import { create } from "zustand";

interface StateFormChange {
  fieldsValues: {
    username: string;
    surname: string;
  };
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  setFieldsValues: (fieldsValues: {
    username: string;
    surname: string;
  }) => void;
}

export const useStateFormChange = create<StateFormChange>((set) => ({
  fieldsValues: {
    username: "",
    surname: "",
  },
  isOpen: false,
  setIsOpen: (isOpen) => set({ isOpen }),
  setFieldsValues: (fieldsValues) => set({ fieldsValues }),
}));
