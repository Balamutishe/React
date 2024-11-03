import { createContext } from 'react';
import { User } from '../api/User';

type TAuthStatusContextParams = {
  status: string;
  user: User | undefined;
  visible: boolean;
  modalVariant: string;
  handleSetVisibility: (event: React.BaseSyntheticEvent) => void;
};

export const authStatusContext = createContext<TAuthStatusContextParams>({
  status: '',
  user: {
    name: '',
    surname: '',
    email: '',
    favorites: [],
  },

  visible: false,
  modalVariant: '',
  handleSetVisibility: () => {},
});
