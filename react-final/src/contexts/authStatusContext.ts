import { createContext } from 'react';

type TAuthStatusContextParams = {
  status: string;
  userName: string;
};

export const authStatusContext = createContext<TAuthStatusContextParams>({
  status: '',
  userName: '',
});
