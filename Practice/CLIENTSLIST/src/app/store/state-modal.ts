import { create } from "zustand";

interface StateModal {
  visible: boolean;
  variant: "create" | "edit";
  setIsVisibility: (visible: boolean) => void;
  setVariant: (visible: "create" | "edit") => void;
}

export const useStateModal = create<StateModal>((set) => ({
  visible: false,
  variant: "create",
  setIsVisibility: (visible) => set({ visible }),
  setVariant: (variant) => set({ variant }),
}));
