import { createContext } from 'react';

type TAuthStatusContextParams = {
  status: string;
};

export const authStatusContext = createContext<TAuthStatusContextParams>({
  status: '',
});
