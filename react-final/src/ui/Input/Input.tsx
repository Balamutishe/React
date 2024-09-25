import { FC } from 'react';

import './Input.css';

interface IInputProps {
  type: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: FC<IInputProps> = ({ type, placeholder, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      className='input'
    />
  );
};
