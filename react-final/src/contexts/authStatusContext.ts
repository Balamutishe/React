import { createContext } from 'react';

type TAuthStatusContextParams = {
  visible: boolean;
  modalVariant: string;
  handleSetVisibility: (event: React.BaseSyntheticEvent) => void;
};

export const authStatusContext = createContext<TAuthStatusContextParams>({
  visible: false,
  modalVariant: '',
  handleSetVisibility: () => {},
});
