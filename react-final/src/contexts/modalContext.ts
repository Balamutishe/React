import { createContext } from 'react';

type TModalContextParams = {
  visible: boolean;
  modalVariant: string;
  handleSetVisibility: (event: React.BaseSyntheticEvent) => void;
};

export const modalContext = createContext<TModalContextParams>({
  visible: false,
  modalVariant: '',
  handleSetVisibility: () => {},
});
