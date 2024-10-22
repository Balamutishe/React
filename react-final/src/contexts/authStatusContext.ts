import { createContext } from 'react';
import { User } from '../api/User';

type TAuthStatusContextParams = {
  status: string;
  user: User | undefined;
};

export const authStatusContext = createContext<TAuthStatusContextParams>({
  status: '',
  user: {
    name: '',
    surname: '',
    email: '',
    favorites: [],
  },
});
