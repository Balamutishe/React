import { FC, ReactNode } from 'react';

import './Input.css';

interface IInputContainerProps {
  children: ReactNode;
}

export const InputContainer: FC<IInputContainerProps> = ({ children }) => {
  return <div className='container-input'>{children}</div>;
};
